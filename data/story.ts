import { Story } from "../types/story";

export const roomThatRemembers: Story = {
  id: "room-that-remembers",
  endings: [
    {
      id: "wakeUp",
      title: "The Awakening",
    },
    {
      id: "stay",
      title: "The Loop",
    },
    {
      id: "breakCycle",
      title: "Breaking the Cycle",
    },
  ],
  title: "The Room That Remembers",

  description: "Every choice leaves something behind.",

  startScene: "room",

  scenes: {
    room: {
      id: "room",
      text: `You wake up in a room you've never seen before.

There are no windows. No furniture. Just a wooden door and an old clock on the wall.

The clock reads 3:17 AM.

You reach for your phone.

No signal.

Then you notice something strange.

The clock has stopped ticking.

But you can still hear it.`,

      choices: [
        {
          text: "Open the door",
          next: "hallway",
        },
        {
          text: "Examine the clock",
          next: "clock",
        },
        {
          text: "Stay where you are",
          next: "voice",
        },
      ],
    },

    hallway: {
      id: "hallway",
      text: `The door opens without a sound.

Beyond it is a long hallway.

There are doors on both sides, stretching farther than the walls should allow.

Every door has a number.

101.

102.

103.

You keep walking.

Then you see a door marked 104.

Your birthday.

You don't remember telling anyone your birthday.`,

      choices: [
        {
          text: "Open 104",
          next: "room104",
        },
        {
          text: "Keep walking",
          next: "hallwayEnd",
        },
        {
          text: "Go back to the room",
          next: "room",
        },
      ],
    },

    clock: {
      id: "clock",
      text: `You step closer.

The clock has no hands.

Instead, there's a tiny photograph underneath it.

You pick it up.

It's a photograph of you.

Standing in this exact room.

But you're wearing clothes you've never owned.

On the back, someone has written:

"Don't let yourself wake up."`,

      choices: [
        {
          text: "Look behind the clock",
          next: "room104",
        },
        {
          text: "Destroy the photograph",
          next: "voice",
        },
        {
          text: "Put it back and leave",
          next: "hallway",
        },
      ],
    },

    voice: {
      id: "voice",
      text: `You sit on the floor.

You decide not to move.

Maybe this is a dream.

Maybe you'll wake up.

Then someone whispers from behind you.

"You always say that."

You turn around.

Nobody is there.

The voice whispers again.

"This is the seventh time."`,

      choices: [
        {
          text: 'Ask "Who are you?"',
          next: "hallwayEnd",
        },
        {
          text: "Run toward the door",
          next: "hallway",
        },
        {
          text: "Close your eyes",
          next: "wakeUp",
        },
      ],
    },

    room104: {
      id: "room104",
      text: `The room is almost identical to the one you woke up in.

Except someone is sitting on the bed.

You can't see their face.

They slowly stand.

Then they say your name.

Not your nickname.

Not the name your friends call you.

Your full name.

The person finally turns around.

It's you.`,

      choices: [
        {
          text: "Ask what happened",
          next: "truth",
        },
        {
          text: "Run",
          next: "hallwayEnd",
        },
        {
          text: "Touch them",
          next: "stay",
        },
      ],
    },

    hallwayEnd: {
      id: "hallwayEnd",
      text: `You run.

Door after door disappears behind you.

101.

102.

103.

Then nothing.

The hallway ends.

There's only one door.

No number.

No handle.

Just a message carved into the wood:

"You already chose."

You suddenly remember something.

You remember waking up here before.

You remember choosing the door.

You remember dying.`,

      choices: [
        {
          text: "Knock",
          next: "truth",
        },
        {
          text: "Turn around",
          next: "voice",
        },
        {
          text: "Push the door",
          next: "breakCycle",
        },
      ],
    },

    truth: {
      id: "truth",
      text: `The person who looks like you sits down.

"You're not trapped here," they say.

"You built this place."

You don't understand.

They point toward the clock.

"Every time you wake up, you forget."

"Every time you remember, you come back."

You look at them.

"Then how do I leave?"

They smile.

"You don't."

A pause.

"You decide."`,

      choices: [
        {
          text: "Wake up",
          next: "wakeUp",
        },
        {
          text: "Stay",
          next: "stay",
        },
        {
          text: "Break the clock",
          next: "breakCycle",
        },
      ],
    },

    wakeUp: {
      id: "wakeUp",
      text: `Your eyes open.

You're in your bedroom.

Morning sunlight fills the room.

Your phone is beside you.

7:42 AM.

You laugh nervously.

Just a nightmare.

Then your phone vibrates.

A notification appears:

"Alarm dismissed — 3:17 AM."`,

      choices: [],
    },

    stay: {
      id: "stay",
      text: `You sit on the bed.

"I'm staying."

The other you smiles.

The lights go out.

When they come back on, you're standing in the room where you first woke up.

The clock reads:

3:17 AM.

You hear the ticking begin again.

And somewhere outside the room...

someone opens the door.`,

      choices: [],
    },

    breakCycle: {
      id: "breakCycle",
      text: `You grab the clock.

"No."

You smash it against the floor.

Silence.

The walls begin to crack.

The hallway disappears.

The other you screams:

"What did you do?"

You smile.

For the first time, you don't feel afraid.

Everything turns white.

You wake up.

3:18 AM.

Your phone has one new message.

"It worked."

You don't know who sent it.

But for some reason...

you know exactly who.`,

      choices: [],
    },
  },
};

export const lastTrain: Story = {
  id: "last-train",
  endings: [
    {
      id: "ending",
      title: "The Last Stop",
    },
  ],
  title: "The Last Train",

  description: "The train has no destination. You are already on it.",

  startScene: "platform",

  scenes: {
    platform: {
      id: "platform",
      text: `The station is empty.

Your watch says 11:48 PM.

A train arrives without making a sound.

There is only one carriage with its lights on.

The doors open.

You hear someone inside say your name.`,

      choices: [
        {
          text: "Get on the train",
          next: "carriage",
        },
        {
          text: "Wait on the platform",
          next: "wait",
        },
      ],
    },

    carriage: {
      id: "carriage",
      text: `The doors close behind you.

There are no other passengers.

You sit down.

The announcement system crackles.

"Next stop..."

Static.

Then your own voice finishes the sentence.

"...where you left us."`,

      choices: [
        {
          text: "Look outside",
          next: "window",
        },
        {
          text: "Walk to the next carriage",
          next: "nextCarriage",
        },
      ],
    },

    wait: {
      id: "wait",
      text: `The train leaves.

You watch the red lights disappear into the darkness.

The station becomes completely silent.

Then you hear the train arriving again.

You look at the clock.

11:48 PM.

Again.`,

      choices: [
        {
          text: "Get on",
          next: "carriage",
        },
      ],
    },

    window: {
      id: "window",
      text: `You look outside.

The station isn't moving past you.

Your childhood home is.

You see yourself standing outside the house.

Watching the train.

Waiting for someone to get off.`,

      choices: [
        {
          text: "Open the door",
          next: "ending",
        },
      ],
    },

    nextCarriage: {
      id: "nextCarriage",
      text: `You open the door to the next carriage.

Someone is sitting there.

You recognize them immediately.

It's you.

Older.

Much older.

They look at you and whisper:

"You shouldn't have gotten on."`,

      choices: [
        {
          text: "Ask where the train is going",
          next: "ending",
        },
      ],
    },

    ending: {
      id: "ending",
      text: `The train slows down.

The doors open.

You step outside.

The platform is empty.

Your watch still says 11:48 PM.

Behind you, the train disappears.

You hear the station announcement:

"Thank you for choosing to stay."

The lights go out.`,

      choices: [],
    },
  },
};
