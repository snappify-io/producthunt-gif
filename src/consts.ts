export const BG_ORANGE = ['#FF75B5', '#FFB86C'];
export const BG_GREEN = ['#1c5e65', '#53c594'];
export const BG_BLUE = ['#283593', '#1976d2'];
export const BG_PURPLE = ['#654ea3', '#da98b4'];

export const SCALE_CODE_IN_FRAME = 5;
export const SCALE_CODE_OUT_FRAME = 130;

export const SCALE_BG_OUT_FRAME = SCALE_CODE_IN_FRAME + 5;
export const SCALE_BG_IN_FRAME = SCALE_CODE_OUT_FRAME - 2;

export const FRAMES_BETWEEN_COLOR_CHANGE = 15;

export const CHANGE_COLOR_1 = SCALE_BG_OUT_FRAME + 20;
export const CHANGE_COLOR_FINISH_1 =
	CHANGE_COLOR_1 + FRAMES_BETWEEN_COLOR_CHANGE;
export const CHANGE_COLOR_2 =
	CHANGE_COLOR_FINISH_1 + FRAMES_BETWEEN_COLOR_CHANGE;
export const CHANGE_COLOR_FINISH_2 =
	CHANGE_COLOR_2 + FRAMES_BETWEEN_COLOR_CHANGE;
export const CHANGE_COLOR_3 =
	CHANGE_COLOR_FINISH_2 + FRAMES_BETWEEN_COLOR_CHANGE;
export const CHANGE_COLOR_FINISH_3 =
	CHANGE_COLOR_3 + FRAMES_BETWEEN_COLOR_CHANGE;