import React, { useRef, useEffect, useState } from 'react'

const roadmapConts = [
  // {
  //   date: 'February 2022',
  //   content: 'Andrew Yang public announcement',
  // },
  {
    date: 'Beginning of 2022',
    content: 'The Ranch was built and the first brick was laid on the ground...',
  },
  {
    date: 'TBD 2022',
    content:
      'TBD',
  },
  {
    date: 'TBD 2022',
    content: 'TBD',
  },
  {
    date: 'TBD 2022',
    content:
      'TBD',
  },
  {
    date: 'TBD 2022',
    content: 'TBD',
  },
  {
    date: 'TBD 2022',
    content: 'TBD',
  },
  {
    date: 'TBD 2022',
    content: 'TBD',
  },
  {
    date: 'TBD 2022',
    content: 'TBD',
  },
  {
    date: 'TBD 2022',
    content:
      'TBD',
  },
  {
    date: 'TBD 2022',
    content:
      'TBD',
  },
  {
    date: 'TBD 2022',
    content:
      'TBD',
  },
  {
    date: 'TBD 2022',
    content: 'TBD',
  },
  {
    date: 'TBD 2022',
    content: 'TBD',
  },
  {
    date: 'TBD 2022',
    content: 'TBD',
  },
  {
    date: 'TBD 2022',
    content: 'TBD',
  },
  {
    date: 'TBD 2022',
    content: 'TBD',
  },
  {
    date: 'TBD',
    content: 'TBD',
  },
]
export default function Roadmap(props) {
  const timeline = useRef(null)
  let initalArray = []
  let diamondsRefs = []
  for (var i = 0; i < 17; i++) {
    initalArray.push('')
  }
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))

  const [timePonints, setTimePointsArray] = useState(initalArray)
  let halfScreenHeight = null

  const animation = () => {
    if (timeline.current != null) {
      const rect = timeline.current.getBoundingClientRect()
      if (rect.top - 200 > halfScreenHeight || rect.bottom + 200 < halfScreenHeight) {
        //reduce too many calculations on unnecessary part
        return
      }
      window.requestAnimationFrame(() => {
        const initialColor = '#898783'
        const fillColor = '#895F1F'
        handleDiamonds()
        const rect = timeline.current.getBoundingClientRect()
        if (rect.bottom > halfScreenHeight && rect.top < halfScreenHeight) {
          const depthPx = rect.bottom - halfScreenHeight
          const depthPercent = (depthPx * 100) / rect.height
          timeline.current.style.background = `linear-gradient(to top, ${initialColor} ${depthPercent}%, ${fillColor} ${depthPercent}% 100%)`
          timeline.current.style.transform = 'translateZ(0)'
        } else if (rect.bottom < halfScreenHeight) {
          timeline.current.style.background = `linear-gradient(to top, ${initialColor} 0%, ${fillColor} 0% 100%)`
          timeline.current.style.transform = 'translateZ(0)'
        } else if (rect.top > halfScreenHeight) {
          timeline.current.style.background = `linear-gradient(to top, ${initialColor} 100%, ${fillColor} 100% 100%)`
          timeline.current.style.transform = 'translateZ(0)'
        }
      })
    }
  }

  const handleDiamonds = () => {
    if (diamondsRefs != null) {
      diamondsRefs.map((item, index) => {
        const rect = item.current.getBoundingClientRect()
        if (rect.top < halfScreenHeight) {
          setTimePointsArray(prev => {
            prev[index] = 'active'
            return [...prev]
          })
        } else if (rect.top > halfScreenHeight) {
          setTimePointsArray(prev => {
            prev[index] = ''
            return [...prev]
          })
        }
      })
    }
  }

  const handleResize = () => {
    halfScreenHeight = window?.innerHeight / 2
  }

  useEffect(() => {
    halfScreenHeight = window?.innerHeight / 2
    window.addEventListener('resize', handleResize)
    document.addEventListener('scroll', animation)
    return () => {
      document.removeEventListener('scroll', animation)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`roadmap-wrapper ${props.className ? props.className : ''}`}>
      <div className="roadmap-list pl-[16px] space-y-[40px]">
        <div ref={timeline} className="timeline mt-[2px]" />
        {roadmapConts.map((item, index) => (
          <div
            key={index}
            ref={diamondsRefs[index]}
            className={`roadmap-list-item grid sm:grid-cols-3 grid-cols-1 relative ${timePonints[index]}`}
          >
            <span className="md:ml-[32px] sm:ml-[8px] ml-[16px] col-span-1 text-[18px] text-lightest_gold">
              {item.date}
            </span>
            <div
              className="item-content col-span-2 md:pl-[8px] pl-[16px] text-white"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
