<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";
</script>

<Card>
  <h2 class="text-2xl">/about</h2>
  <div>
    <Command prompt="cat ~/about.txt">
      <p>
        Software Developer specialized in frontend development, with experience
        in building scalable, maintainable web applications. Over the last two
        years, I've worked on enterprise projects improving code quality and
        user experience using React, Angular, and TypeScript.
      </p>
    </Command>
  </div>
</Card>
