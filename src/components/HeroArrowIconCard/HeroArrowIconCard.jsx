import Arrow from "../Arrow/Arrow";


export default function HeroArrowIconCard({ClassNameHeroArrowIcon}) {
  return (
    <div className={ClassNameHeroArrowIcon}>
        <Arrow G={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="Know More" />
    </div>
  )
}
