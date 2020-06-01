import { ScoreBoardText, TextTypes, buildLeaderBoard } from './leaderBoard'
import { builderScene } from './builderScene'

builderScene()

let clickCounter: number = 0

const dogStatue = new Entity('dogStatue')
engine.addEntity(dogStatue)

dogStatue.addComponent(
  new Transform({
    position: new Vector3(7.5, 0, 13),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
)
dogStatue.addComponentOrReplace(
  new GLTFShape('models/PillarDog_01/PillarDog_01.glb')
)
dogStatue.addComponent(
  new OnPointerDown(
    (e) => {
      clickCounter += 1
      log(clickCounter)
    },
    {
      hoverText: 'Click the Dog!',
    }
  )
)

const smallStoneWall = new Entity('smallStoneWall')
engine.addEntity(smallStoneWall)
smallStoneWall.addComponent(
  new Transform({
    position: new Vector3(1, 0, 9.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.8453333377838135, 1.8453333377838135, 6),
  })
)
smallStoneWall.addComponentOrReplace(
  new GLTFShape('models/FenceStoneTallSmall_01/FenceStoneTallSmall_01.glb')
)

const boardParent = new Entity()
boardParent.addComponent(
  new Transform(
    new Transform({
      position: new Vector3(1.3, 2.2, 6.5),
      rotation: Quaternion.Euler(0, 270, 0),
    })
  )
)
engine.addEntity(boardParent)

buildLeaderBoard(boardParent, 9)

Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, (e) => {
  log(`pos: `, Camera.instance.position)
  log(`rot: `, Camera.instance.rotation)
})
