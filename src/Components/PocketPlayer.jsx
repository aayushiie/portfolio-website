import { useEffect, useRef, useState } from "react";
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
} from "lucide-react";

const songs = [
    {
        title: "Dust Bowl",
        artist: "Ethel Cain",
        src: "/songs/dust-bowl.mp3",
    },
    {
        title: "What You Know",
        artist: "Two Door Cinema Club",
        src: "/songs/what-you-know.mp3",
    },
    {
        title: "Who Knows Where the Time Goes",
        artist: "Nina Simone",
        src: "/songs/who-knows-where-time-goes.mp3",
    },
    {
        title: "80's Comedown Machine",
        artist: "The Strokes",
        src: "/songs/80s-comedown-machine.mp3",
    },
    {
        title: "A Running Start",
        artist: "Sufjan Stevens",
        src: "/songs/a-running-start.mp3",
    },
    {
        title: "Aerials",
        artist: "System of a Down",
        src: "/songs/aerials.mp3",
    },
    {
        title: "Alma Mater",
        artist: "Bleachers",
        src: "/songs/alma-mater.mp3",
    },
    {
        title: "Basket Case",
        artist: "Green Day",
        src: "/songs/basket-case.mp3",
    },
    {
        title: "Before I Forget",
        artist: "Slipknot",
        src: "/songs/before-i-forget.mp3",
    },
    {
        title: "Between the Bars",
        artist: "Elliott Smith",
        src: "/songs/between-the-bars.mp3",
    },
    {
        title: "I Lied",
        artist: "Lord Huron, August Ponthier",
        src: "/songs/i-lied.mp3",
    },
    {
        title: "Zombie",
        artist: "The Cranberries",
        src: "/songs/zombie.mp3",
    },
    {
        title: "Knockin' On Heaven's Door",
        artist: "Bob Dylan",
        src: "/songs/knockin-on-heavens-door.mp3",
    },
    {
        title: "The Narcissist",
        artist: "Blur",
        src: "/songs/the-narcissist.mp3",
    },
    {
        title: "The Old Religion",
        artist: "Florence + The Machine",
        src: "/songs/the-old-religion.mp3",
    },
    {
        title: "Time",
        artist: "Pink Floyd",
        src: "/songs/time.mp3",
    },
    {
        title: "Tiny Raisin",
        artist: "Suki Waterhouse",
        src: "/songs/tiny-raisin.mp3",
    },
    {
        title: "Panic",
        artist: "The Smiths",
        src: "/songs/panic.mp3",
    },
    {
        title: "Sinner",
        artist: "The Last Dinner Party",
        src: "/songs/sinner.mp3",
    },
    {
        title: "RAWFEAR",
        artist: "Twenty One Pilots",
        src: "/songs/rawfear.mp3",
    },
    {
        title: "She's Not There",
        artist: "The Zombies",
        src: "/songs/shes-not-there.mp3",
    },
    {
        title: "Not Strong Enough",
        artist: "boygenius",
        src: "/songs/not-strong-enough.mp3",
    },
    {
        title: "Overcome",
        artist: "Nothing But Thieves",
        src: "/songs/overcome.mp3",
    },
    {
        title: "House of the Rising Sun",
        artist: "The Animals",
        src: "/songs/house-of-the-rising-sun.mp3",
    },
];

export default function PocketPlayer() {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const audioRef = useRef(new Audio(songs[0].src));

    const currentSong = songs[currentTrack];

    // LOAD TRACK
    useEffect(() => {
        audioRef.current.src = currentSong.src;

        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentTrack]);

    // TRACK PROGRESS
    useEffect(() => {
        const audio = audioRef.current;

        const updateProgress = () => {
            const percentage =
                (audio.currentTime / audio.duration) * 100;

            setProgress(percentage || 0);
        };

        audio.addEventListener("timeupdate", updateProgress);

        return () => {
            audio.removeEventListener(
                "timeupdate",
                updateProgress
            );
        };
    }, []);

    // PLAY / PAUSE
    const togglePlay = async () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (err) {
                console.log(err);
            }
        }
    };

    // NEXT
    const nextTrack = async () => {
        const next =
            (currentTrack + 1) % songs.length;

        setCurrentTrack(next);

        setTimeout(async () => {
            await audioRef.current.play();
            setIsPlaying(true);
        }, 0);
    };

    // PREVIOUS
    const prevTrack = async () => {
        const prev =
            (currentTrack - 1 + songs.length) %
            songs.length;

        setCurrentTrack(prev);

        setTimeout(async () => {
            await audioRef.current.play();
            setIsPlaying(true);
        }, 0);
    };

    return (
        <div className="relative">
            {/* PLAYER BODY */}
            <div
                className="
                    w-[260px]
                    rounded-[36px]
                    p-3
                    bg-gradient-to-br
                    from-[#f6f6f6]
                    to-[#d8d8d8]
                    shadow-[0_20px_40px_rgba(0,0,0,0.18)]
                    border
                    border-black/10
                    rotate-[10deg]
                    opacity-95
                    transition-transform
                    hover:rotate-[6deg]
                    duration-300
        "
            >
                {/* SCREEN */}
                <div
                    className="
            rounded-2xl
            overflow-hidden
            bg-[#bfc8c2]
            border
            border-black/20
            shadow-inner
          "
                >
                    {/* HEADER */}
                    <div className="bg-[#d8e1dd] px-4 py-2 border-b border-black/10 flex items-center justify-between text-[#274c77] font-semibold text-sm">
                        <span>Ⅱ</span>
                        <span>Music?</span>
                        <span>▮▮▮</span>
                    </div>

                    {/* SONG INFO */}
                    <div className="bg-[#d7e3ea] p-2">
                        <div className="text-[#1d3557] text-sm font-semibold truncate">
                            {currentSong.title}
                        </div>

                        <div className="text-[#1d3557]/70 text-xs truncate mt-1">
                            {currentSong.artist}
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="mt-2">
                            <div className="h-2 rounded-full bg-black/10 overflow-hidden">
                                <div
                                    className="h-full bg-[#274c77] transition-all duration-200"
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                />
                            </div>
                        </div>

                        {/* SONG LIST */}
                        <div className="mt-5 h-[120px] overflow-y-auto pr-1 space-y-2 player-scroll">
                            {songs.map((song, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentTrack(index);
                                        setIsPlaying(true);

                                        setTimeout(() => {
                                            audioRef.current.play();
                                        }, 0);
                                    }}
                                    className={`
        w-full
        rounded-lg
        px-3
        py-2
        text-left
        transition-all
        flex
        items-center
        justify-between
        gap-3
        ${currentTrack === index
                                            ? "bg-[#274c77] text-white"
                                            : "bg-white/40 text-[#1d3557] hover:bg-white/70"
                                        }
      `}
                                >
                                    {/* TITLE + ARTIST INLINE */}
                                    <div className="flex items-center gap-2 min-w-0">
                                        <span className="text-sm font-medium truncate">
                                            {song.title}
                                        </span>

                                        <span className="text-xs opacity-60 shrink-0">
                                            —
                                        </span>

                                        <span className="text-xs opacity-70 truncate">
                                            {song.artist}
                                        </span>
                                    </div>

                                    {/* ACTIVE INDICATOR */}
                                    {currentTrack === index && (
                                        <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>


                    </div>
                </div>

                {/* CLICK WHEEL */}
                <div className="flex justify-center mt-2">
                    <div
                        className="
              relative
              w-[100px]
              h-[100px]
              rounded-full
              bg-gradient-to-br
              from-[#f0f0f0]
              to-[#cfcfcf]
              shadow-[inset_4px_4px_10px_rgba(255,255,255,0.7),inset_-6px_-6px_14px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.12)]
            "
                    >
                        {/* MENU */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[#274c77] text-xs font-medium tracking-wide">
                            MENU
                        </div>

                        {/* PREVIOUS */}
                        <button
                            onClick={prevTrack}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#274c77] hover:scale-110 transition"
                        >
                            <SkipBack size={10} />
                        </button>

                        {/* NEXT */}
                        <button
                            onClick={nextTrack}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#274c77] hover:scale-110 transition"
                        >
                            <SkipForward size={10} />
                        </button>

                        {/* PLAY / PAUSE */}
                        <button
                            onClick={togglePlay}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#274c77] hover:scale-110 transition"
                        >
                            {isPlaying ? (
                                <Pause size={10} />
                            ) : (
                                <Play size={10} />
                            )}
                        </button>

                        {/* CENTER BUTTON */}
                        <div
                            className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
               w-[30px]
                h-[30px]
                rounded-full
                bg-gradient-to-br
                from-[#f6f6f6]
                to-[#dadada]
                shadow-[0_4px_10px_rgba(0,0,0,0.15)]
              "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}