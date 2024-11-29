import { ZodiacInfo } from '../types/zodiac';

export const getZodiacSign = (month: number, day: number): ZodiacInfo => {
  const dates = [
    { sign: '摩羯座', startDate: '12-22', endDate: '01-19' },
    { sign: '水瓶座', startDate: '01-20', endDate: '02-18' },
    { sign: '双鱼座', startDate: '02-19', endDate: '03-20' },
    { sign: '白羊座', startDate: '03-21', endDate: '04-19' },
    { sign: '金牛座', startDate: '04-20', endDate: '05-20' },
    { sign: '双子座', startDate: '05-21', endDate: '06-20' },
    { sign: '巨蟹座', startDate: '06-21', endDate: '07-22' },
    { sign: '狮子座', startDate: '07-23', endDate: '08-22' },
    { sign: '处女座', startDate: '08-23', endDate: '09-22' },
    { sign: '天秤座', startDate: '09-23', endDate: '10-22' },
    { sign: '天蝎座', startDate: '10-23', endDate: '11-21' },
    { sign: '射手座', startDate: '11-22', endDate: '12-21' }
  ];

  const date = new Date(2000, month - 1, day);
  const monthDay = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  const zodiacSign = dates.find(({ startDate, endDate }) => {
    if (startDate > endDate) {
      return monthDay >= startDate || monthDay <= endDate;
    }
    return monthDay >= startDate && monthDay <= endDate;
  });

  const zodiacInfo: Record<string, ZodiacInfo> = {
    '摩羯座': {
      sign: '摩羯座',
      date: '12月22日-1月19日',
      element: '土',
      traits: ['务实', '负责', '自律'],
      compatibility: ['金牛座', '处女座']
    },
    '水瓶座': {
      sign: '水瓶座',
      date: '1月20日-2月18日',
      element: '风',
      traits: ['独特', '创新', '人道主义'],
      compatibility: ['双子座', '天秤座']
    },
    '双鱼座': {
      sign: '双鱼座',
      date: '2月19日-3月20日',
      element: '水',
      traits: ['富有同情心', '艺术', '直觉'],
      compatibility: ['巨蟹座', '天蝎座']
    },
    '白羊座': {
      sign: '白羊座',
      date: '3月21日-4月19日',
      element: '火',
      traits: ['勇敢', '热情', '领导力'],
      compatibility: ['狮子座', '射手座']
    },
    '金牛座': {
      sign: '金牛座',
      date: '4月20日-5月20日',
      element: '土',
      traits: ['稳重', '可靠', '享受生活'],
      compatibility: ['处女座', '摩羯座']
    },
    '双子座': {
      sign: '双子座',
      date: '5月21日-6月20日',
      element: '风',
      traits: ['好奇', '适应性强', '交际'],
      compatibility: ['天秤座', '水瓶座']
    },
    '巨蟹座': {
      sign: '巨蟹座',
      date: '6月21日-7月22日',
      element: '水',
      traits: ['富有同情心', '保护欲强', '直觉'],
      compatibility: ['天蝎座', '双鱼座']
    },
    '狮子座': {
      sign: '狮子座',
      date: '7月23日-8月22日',
      element: '火',
      traits: ['自信', '慷慨', '创造力'],
      compatibility: ['白羊座', '射手座']
    },
    '处女座': {
      sign: '处女座',
      date: '8月23日-9月22日',
      element: '土',
      traits: ['细心', '分析能力强', '完美主义'],
      compatibility: ['金牛座', '摩羯座']
    },
    '天秤座': {
      sign: '天秤座',
      date: '9月23日-10月22日',
      element: '风',
      traits: ['外交', '和谐', '公平'],
      compatibility: ['双子座', '水瓶座']
    },
    '天蝎座': {
      sign: '天蝎座',
      date: '10月23日-11月21日',
      element: '水',
      traits: ['神秘', '强烈', '洞察力'],
      compatibility: ['巨蟹座', '双鱼座']
    },
    '射手座': {
      sign: '射手座',
      date: '11月22日-12月21日',
      element: '火',
      traits: ['乐观', '冒险', '哲学'],
      compatibility: ['白羊座', '狮子座']
    }
  };

  return zodiacInfo[zodiacSign?.sign || '摩羯座'];
};