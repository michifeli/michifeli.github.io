<script lang="ts">
	let copied = false;
	function copyEmail() {
		navigator.clipboard.writeText('michidot@proton.me');
		copied = true;
		setTimeout(() => (copied = false), 1200);
	}
</script>

<footer>
	<div class="footer-left">
		<span class="name">Mitchel Rojas</span>
		<a
			href="https://github.com/michifeli"
			target="_blank"
			rel="noopener noreferrer"
			class="username"
		>
			(@michifeli)
		</a>

		<span class="email-group">
			<a
				href="mailto:michidot@proton.me"
				class="email-link"
				aria-label="Enviar correo a michidot@proton.me"
				style="margin-left: 0.5em; font-size: 0.95em; color: var(--text-muted, #a0a0a0);"
			>
				(michidot@proton.me)
			</a>
			<button
				type="button"
				class="copy-btn"
				aria-label="Copiar correo al portapapeles"
				on:click={() => copyEmail()}
			>
				{#if copied}
					<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
						><path
							d="M13.485 1.929a3.25 3.25 0 0 1 0 4.596l-7.07 7.07a3.25 3.25 0 0 1-4.596-4.596l7.07-7.07a3.25 3.25 0 0 1 4.596 0zm-3.182 1.414-7.07 7.07a1.75 1.75 0 1 0 2.475 2.475l7.07-7.07a1.75 1.75 0 1 0-2.475-2.475z"
						></path></svg
					>
				{:else}
					<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
						><path
							d="M10 1.5A1.5 1.5 0 0 1 11.5 3v1h-1V3a.5.5 0 0 0-.5-.5h-7A.5.5 0 0 0 2.5 3v9A.5.5 0 0 0 3 12.5h1v1H3A1.5 1.5 0 0 1 1.5 12V3A1.5 1.5 0 0 1 3 1.5h7zm1 3A1.5 1.5 0 0 1 12.5 6v7A1.5 1.5 0 0 1 11 14.5H6A1.5 1.5 0 0 1 4.5 13V6A1.5 1.5 0 0 1 6 4.5h5zm-6 1A.5.5 0 0 0 4.5 6v7a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5z"
						></path></svg
					>
				{/if}
			</button>
		</span>
	</div>

	<div class="footer-right">
		<a
			href="https://linkedin.com/in/mitchelrojas"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="LinkedIn"
			class="icon-link"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="currentColor"
			>
				<path
					d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
				/>
			</svg>
		</a>

		<a
			href="https://github.com/michifeli"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="GitHub"
			class="icon-link"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="currentColor"
			>
				<path
					d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
				/>
			</svg>
		</a>

		<a
			href="https://www.buymeacoffee.com/michidev"
			target="_blank"
			rel="noopener noreferrer"
			class="coffee-link"
		>
			Buy me a coffee ☕
		</a>

		<a
			href="https://github.com/michifeli/webv2"
			target="_blank"
			rel="noopener noreferrer"
			class="source-btn"
		>
			Source
		</a>
	</div>
</footer>

<style>
	.email-group {
		display: inline-flex;
		align-items: center;
		gap: 0.2em;
	}
	.copy-btn {
		background: none;
		border: none;
		padding: 0 0.2em;
		color: var(--text-muted, #a0a0a0);
		cursor: pointer;
		transition: color 0.2s;
		outline: none;
		display: flex;
		align-items: center;
	}
	.copy-btn:hover,
	.copy-btn:focus {
		color: var(--link-color, #f763bf);
	}
	.copy-btn svg {
		display: block;
		pointer-events: none;
	}
	.copy-btn:active {
		color: #fff;
	}
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 0;
		margin-top: 4rem;
		border-top: 1px solid var(--border, #3a3a3a);
		font-size: 0.875rem;
	}

	.footer-left {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.name {
		color: var(--text-muted, #a0a0a0);
	}

	.username {
		color: var(--text-muted, #a0a0a0);
		text-decoration: none;
	}

	.username:hover {
		text-decoration: underline;
	}

	.footer-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.icon-link {
		color: var(--text-muted, #a0a0a0);
		transition: color 0.2s;
		display: flex;
	}

	.icon-link:hover {
		color: var(--text, #ececec);
	}

	.coffee-link {
		color: var(--text-muted, #a0a0a0);
		text-decoration: none;
		transition: color 0.2s;
	}

	.coffee-link:hover {
		color: var(--text, #ececec);
	}

	.source-btn {
		color: var(--text, #ececec);
		text-decoration: underline;
		transition: color 0.2s;
	}

	.source-btn:hover {
		color: var(--text-muted, #a0a0a0);
	}
</style>
