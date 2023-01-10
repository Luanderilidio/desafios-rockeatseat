import { FastForward, Pause, Play, Rewind } from "phosphor-react";
import ProgressBar from "@ramonak/react-progress-bar";
import { IconButton, Tooltip } from "@mui/material";

interface AudioPlayerProps {
  isPlaying: boolean;
  onPlayPauseClick: (state: boolean) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  progress: number;
  duration: number;
}

export default function AudioPlayer({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  progress,
  duration,
}: AudioPlayerProps) {
  return (
    <div className="w-full flex flex-col items-center justify-between gap-4 ">
      <div className="w-full flex items-center justify-between">
        <Tooltip title="voltar 10s" placement="top" arrow>
          <IconButton onClick={onPrevClick}>
            <Rewind weight="fill" size={32} color="#FFFFFF" />
          </IconButton>
        </Tooltip>
        {isPlaying ? (
          <Tooltip title="pausar" placement="top" arrow>
            <IconButton onClick={() => onPlayPauseClick(false)}>
              <Pause size={32} weight="fill" color="#FFFFFF" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="play" placement="top" arrow>
            <IconButton onClick={() => onPlayPauseClick(true)}>
              <Play size={32} weight="fill" color="#FFFFFF" />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="avancar 10s" placement="top" arrow>
          <IconButton onClick={onNextClick}>
            <FastForward weight="fill" size={32} color="#FFFFFF" />
          </IconButton>
        </Tooltip>
      </div>
      <div className="w-full flex flex-col gap-2">
        <ProgressBar
          completed={progress}
          height="8px"
          bgColor="#FFFFFF"
          baseBgColor="#939393"
          maxCompleted={duration}
          isLabelVisible={false}
        />
        <div className="flex items-center justify-between text-gray-400">
          <p>
            {Math.round((progress % 3600) / 60) > 0
              ? `0${Math.round((progress % 3600) / 60)}`
              : "00"}
            :
            {Math.round(progress % 60) > 9
              ? Math.round(progress % 60)
              : `0${Math.round(progress % 60)}`}
          </p>
          <p>03:00</p>
        </div>
      </div>
    </div>
  );
}
