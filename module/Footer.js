export default (targetDivId, context) => {
  document.getElementById(targetDivId).innerHTML = `
    <div class="column was-left">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="">GitHub</a>
        </li>
        <li>
          <a href="">Question?</a>
        </li>
        <li>
          <a href="">Found something broken?</a>
        </li>
        <li>
          <a href="">Found a Chrome bug?</a>
        </li>
      </ul>
      <p>Chrome ♥ WebAudio</p>
    </div>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-57132539-4', 'auto');
      ga('send', 'pageview');
    </script>
  `;
};