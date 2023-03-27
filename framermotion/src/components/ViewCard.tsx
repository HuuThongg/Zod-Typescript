import { motion, Variants } from 'framer-motion'

interface Props {
  emoji: string
  hueA: number
  hueB: number
}
const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320]
];
const ViewCard = () => {
  return (
    food.map(([emoji, hueA, hueB]) => (
      <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
    ))
  )
}

export default ViewCard


function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  return (
    <motion.div className='overflow-hidden bg-red-200 flex items-center justify-center relative p-[20px] -mb-[120px]'>
      <div className='absolute inset-0 clip-path' style={{background}}>
      </div>
      <motion.div className='text-[164px] w-[300px] h-[430px] flex items-center justify-center bg-white  rounded-[20px] origin-[10%_60%]' variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  )
}