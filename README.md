# CSS VS JS Animation
- There are three ways to create animations on web
    - Aniamtion using CSS Transition Property
    - Animation using CSS KeyFrames
    - JS Animations

- PS: JavaScript Animation does not mean that, we use JS directly to create animations, but goes underneath the hood is JS will change the CSS rapidly so it creates an animation. It can be done using web animation api, gsap or anyother js library/framework like Framer Motion, React Sprimg etc.

Now the question comes, i.e. should you use JS or you should use CSS to create animations?
*When  I think about this question 2 questions come in my mind.*
1. How complex is the animation? In other words does the animation contain more than two states? 
    For example:
    1. If the color of button changes for blue to red on hovering it - 2 states
    2. Initially if the color was red, then it changed to blue and now finally yellow - 3 states
    - **If the animation contains more than two states then stick to either keyframes or js animation else use transiston property**
    - If you have 3 - 5 states use **Keyframes**.
    - If the animation is complex say it is assoiciated with multiple elements together, or we need some animations on svg paths or the animation is need to respond to different event triggers or we just need some randomness that only JS can create, use **JS based animations**.
2. Whats the Trigger for the Animation?
    - If Animations don't needed trigger and they are not complex - CSS Animations
    - If you need some trigger for animations like mouse hover, click, submit, change event, scroll event or any other custom event then either CSS Transistion Proerty or JS Based Animations. 