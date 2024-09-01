<script setup>
// === IMPORTS ===
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import highlightFirstVideo from "/assets/videos/highlight-first.mp4";
import highlightSecondVideo from "/assets/videos/hightlight-third.mp4";
import highlightThirdVideo from "/assets/videos/hightlight-sec.mp4";
import highlightFourthVideo from "/assets/videos/hightlight-fourth.mp4";

gsap.registerPlugin(ScrollTrigger);

// === REFS ===
const videoRef = ref([]);
const videoSpanRef = ref([]);
const videoDivRef = ref([]);

// === VARIABLES ===
const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];
const loadedData = ref([]);

// === VIDEO STATE ===
const video = reactive({
  isEnd: false,
  isLastVideo: false,
  startPlay: false,
  videoId: 0,
  isPlaying: false,
});

// === FUNCTIONS ===
const useGSAP = () => {
  gsap.to("#slider", {
    transform: `translateX(${-100 * video.videoId}%)`,
    duration: 2,
    ease: "power2.inOut",
  });

  hightlightsSlides.forEach((slide, index) => {
    const currentVideoRef = videoRef.value[index];
    if (currentVideoRef) {
      ScrollTrigger.create({
        trigger: currentVideoRef,
        start: "top 80%",
        onEnter: () => {
          if (video.videoId === index && !(video.isLastVideo && video.isEnd)) {
            video.startPlay = true;
            video.isPlaying = true;
            currentVideoRef.play();
          }
        },
        onEnterBack: () => {
          if (video.videoId === index && !(video.isLastVideo && video.isEnd)) {
            video.startPlay = true;
            video.isPlaying = true;
            currentVideoRef.play();
          }
        },
        onLeave: () => {
          currentVideoRef.pause();
          video.isPlaying = false;
        },
        onLeaveBack: () => {
          currentVideoRef.pause();
          video.isPlaying = false;
        },
      });
    }
  });
};

const progressBarAnimation = () => {
  const span = videoSpanRef.value[video.videoId];
  const div = videoDivRef.value[video.videoId];
  let currentProgress = 0;

  if (span) {
    const anim = gsap.to(span, {
      onUpdate: () => {
        const progress = Math.ceil(anim.progress() * 100);
        if (progress !== currentProgress) {
          currentProgress = progress;

          gsap.to(videoDivRef.value[video.videoId], {
            width: window.innerWidth < 1200 ? "10vw" : "4vw",
          });

          gsap.to(videoSpanRef.value[video.videoId], {
            width: `${currentProgress}%`,
            backgroundColor: "white",
          });
        }
      },
      onComplete: () => {
        if (video.isPlaying) {
          gsap.to(div, { width: "12px" });
          gsap.to(span, { backgroundColor: "#afafaf" });
        }
      },
    });

    if (video.videoId === 0) {
      anim.restart();
    }

    const animUpdate = () => {
      anim.progress(
        videoRef.value[video.videoId].currentTime /
          hightlightsSlides[video.videoId].videoDuration,
      );
    };

    if (video.isPlaying) {
      gsap.ticker.add(animUpdate);
    } else {
      gsap.ticker.remove(animUpdate);
    }
  }
};

const handleProcess = (type, i = null) => {
  switch (type) {
    case "video-end":
      video.isEnd = true;
      video.videoId = i + 1;
      break;
    case "video-last":
      video.isLastVideo = true;
      break;
    case "video-reset":
      video.isLastVideo = false;
      video.videoId = 0;
      video.isEnd = false;
      break;
    case "play":
      video.isPlaying = true;
      videoRef.value[video.videoId]?.play();
      break;
    case "pause":
      video.isPlaying = false;
      videoRef.value[video.videoId]?.pause();
      break;
    default:
      return video;
  }
};

const handleVideoControls = () => {
  if (video.isLastVideo) {
    handleProcess("video-reset");
  } else {
    handleProcess(!video.isPlaying ? "play" : "pause");
  }
};

const handleLoadedMetaData = (i, e) => {
  loadedData.value = [...loadedData.value, e];
};

// === WATCHERS ===
watch([() => video.isEnd, () => video.videoId], useGSAP);

watch(
  [
    () => video.startPlay,
    () => video.videoId,
    () => video.isPlaying,
    loadedData,
  ],
  () => {
    if (loadedData.value.length > 3) {
      if (!video.isPlaying) {
        videoRef.value[video.videoId]?.pause();
      } else if (video.startPlay) {
        videoRef.value[video.videoId]?.play();
      }
    }
  },
);

watch([() => video.videoId, () => video.startPlay], progressBarAnimation);

// === MOUNT ===
onMounted(() => {
  useGSAP();
});

// === UNMOUNT ===
onUnmounted(() => {
  gsap.ticker.remove(progressBarAnimation);
});
</script>

<template>
  <div class="flex items-center">
    <div
      v-for="(list, i) in hightlightsSlides"
      :key="list.id"
      id="slider"
      class="pr-10 sm:pr-20"
    >
      <div
        class="relative h-[35vh] w-[88vw] sm:h-[50vh] sm:w-[70vw] md:h-[70vh]"
      >
        <div
          class="flex size-full items-center justify-center overflow-hidden rounded-3xl bg-black"
        >
          <video
            id="video"
            playsinline
            preload="auto"
            muted
            :ref="(el) => (videoRef[i] = el)"
            @play="video.isPlaying = true"
            @ended="
              () =>
                i !== 3
                  ? handleProcess('video-end', i)
                  : handleProcess('video-last')
            "
            @loadedmetadata="(e) => handleLoadedMetaData(i, e)"
          >
            <source :src="list.video" type="video/mp4" />
          </video>
        </div>
        <div class="absolute left-[5%] top-12 z-10">
          <p
            v-for="text in list.textLists"
            :key="text"
            class="text-xl font-medium md:text-2xl"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="relative mt-10 flex items-center justify-center">
    <div
      class="flex items-center justify-center rounded-full bg-gray-300 px-7 py-5 backdrop-blur"
    >
      <span
        v-for="(_, i) in videoRef"
        :key="i"
        :ref="(el) => (videoDivRef[i] = el)"
        class="relative mx-2 size-3 rounded-full bg-gray-200"
      >
        <span
          class="absolute size-full rounded-full"
          :ref="(el) => (videoSpanRef[i] = el)"
        />
      </span>
    </div>
    <button
      type="button"
      class="ml-4 flex items-center justify-center rounded-full bg-gray-300 p-4 backdrop-blur"
      @click="handleVideoControls"
    >
      <nuxt-icon
        class="size-6"
        :filled="true"
        :name="
          video.isLastVideo ? 'replay' : !video.isPlaying ? 'play' : 'pause'
        "
      />
    </button>
  </div>
</template>
