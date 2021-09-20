sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.destroy()
})
let mySprite2: Sprite = null
let mySprite = sprites.create(assets.image`Person`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`apple`, SpriteKind.Enemy)
mySprite.setPosition(120, 60)
mySprite2.setPosition(20, 60)
game.onUpdate(function () {
    mySprite.x += controller.dx()
})
