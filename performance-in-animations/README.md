# CSS animations vs JavaScript animations

Animations made with JavaScript are sometimes called imperative animations, and those made with CSS are called declarative animations. CSS animations are handled by the browser's compositor thread rather than the main thread responsible for painting and styling. Consequently, such animations are unaffected by the main thread's more expensive tasks. Of course, animations that trigger the paint or layout events will require work from the main thread, which negates the benefits of using CSS animations.

JavaScript, on the other hand, always gets executed by the main thread. Nonetheless, JavaScript gives you greater control over animations, so you're better off using it in some situations. While CSS is ideal for simple transitions, JavaScript is recommended for animations with advanced effects such as bouncing. Animations that allow the user to pause or rewind should also be animated with JavaScript. JavaScript is necessary to implement certain effects like parallax scrolling.

# Choosing which CSS properties to animate

Continuous animations can consume a significant amount of resources, but some CSS properties are more costly to animate than others. The harder a browser must work to animate a property, the slower the frame rate will be. Therefore, choosing the right CSS properties to animate can have a huge impact on page performance

## There are three main types of CSS properties:

**Layout properties** - These determine the size and placement of page elements. Animations that change an element's width and height can affect the placement of other page elements, which can cause a chain reaction known as "layout thrash." Since animations that change the page layout are especially costly, they are best avoided.

**Paint properties** - These define the appearance of page elements. Making changes to properties such as color requires repainting, which can be costly. That said, simple animations that require a small portion of the viewport to be repainted may have a negligible impact on overall performance. Larger animations that require repainting may not be worth the effort.

**Composite properties** - Which include transform and opacity, are your best friends for creating CSS animations with minimal cost. With transform, you can scale and rotate animations without affecting the page layout. Try to use composite properties for animations whenever possible. With a little creative thinking, you'd be surprised by what you can pull off with just these properties. ISL.co has a helpful blog post explaining how its team turned a janky layout animation into a smooth composite animation.

**Content Source -> [Link](https://www.keycdn.com/blog/animation-performance)**
