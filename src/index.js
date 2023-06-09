const theme = {
  themeName: 'dbgate-plugin-one-dark-theme',
  themeType: 'dark',
  themeClassName: 'theme-dbgate-plugin-one-dark-theme',
  themeCss: `       
  .theme-dbgate-plugin-one-dark-theme {  
    --theme-font-1: #abb2bf; /* core font*/
    --theme-font-2: #383942;
    --theme-font-3: #888888;
    --theme-font-4: #5a5a5a;
    --theme-font-hover: #8dcff8; /* blue-9 */
    --theme-font-link: #61afef; /* blue-8 */
    --theme-font-alt: #98c379; /* green-9 */

    --theme-bg-0: #282c34;
    --theme-bg-1: #21252b;
    --theme-bg-2: #21252b;
    --theme-bg-3: #373e47;
    --theme-bg-4: #313341; 
    --theme-bg-alt: #21252b;

    --theme-bg-gold: #7c6e14; /* gold-2 */
    --theme-bg-orange: #d19a66; /*orange-2 */
    --theme-bg-green: #1d3712; /* green-2 */
    --theme-bg-volcano: #441d12; /* volcano-2 */
    --theme-bg-red: #f44747; /* red-2 */
    --theme-bg-blue: #15395b; /* blue-3 */
    --theme-bg-magenta: #c678dd; /* magenta-3 */

    --theme-font-inv-1: #ffffff;
    --theme-font-inv-15: #dedede;
    --theme-font-inv-2: #b3b3b3;
    --theme-font-inv-3: #808080;
    --theme-font-inv-4: #4d4d4d;

    --theme-bg-inv-1: #282c34;
    --theme-bg-inv-2: #3c3c3c;
    --theme-bg-inv-3: #21252b;
    --theme-bg-inv-4: #707070;

    --theme-border: #444c56; /* #383e4a */

    --theme-bg-hover: #313341;
    --theme-bg-selected: #28414f;
    --theme-bg-selected-point: #03376e; /* blue-5 */

    --theme-bg-statusbar-inv: #21252b;
    --theme-bg-statusbar-inv-hover: #21252b;
    --theme-bg-statusbar-inv-font: #282c34;
    --theme-bg-statusbar-inv-bg: #9da5b4;
    --theme-bg-modalheader: #21252b;

    --theme-bg-button-inv: #004488;
    --theme-bg-button-inv-2: #1a5794;
    --theme-bg-button-inv-3: #346aa0;

    --theme-icon-blue: #3c9ae8;
    --theme-icon-green: #98c379; /* Num color */
    --theme-icon-red: #e06c75;
    --theme-icon-gold: #e8b339;
    --theme-icon-yellow: #d19a66;
    --theme-icon-magenta: #c678dd;

    --theme-icon-inv-green: #98c379;
    --theme-icon-inv-red: #e06c75;
  }
  :root {
  --dim-widget-icon-size: 55px;
  --dim-statusbar-height: 28px;
  --dim-left-panel-width: 300px;
  --dim-tabs-panel-height: 60px;
  --dim-tabs-height: 33px;
  --dim-splitter-thickness: 1px;

  --dim-visible-left-panel: 1; /* set from JS */
  --dim-content-left: calc(
    var(--dim-widget-icon-size) + var(--dim-visible-left-panel) *
      (var(--dim-left-panel-width) + var(--dim-splitter-thickness))
  );

  --dim-visible-toolbar: 0; /* set from JS */
  --dim-visible-titlebar: 0; /* set from JS */

  --dim-toolbar-height: 30px;
  --dim-toolstrip-height: 28px;
  --dim-titlebar-height: 30px;
  --dim-toolbar-top: calc(var(--dim-titlebar-height) * var(--dim-visible-titlebar));
  --dim-header-top: calc(
    var(--dim-titlebar-height) * var(--dim-visible-titlebar) + var(--dim-toolbar-height) * var(--dim-visible-toolbar)
  );
  --dim-content-top: calc(var(--dim-header-top) + var(--dim-tabs-panel-height));

  --dim-large-form-margin: 20px;
}
  .main-container{

  }
  input{
    outline:none;
    border:1px solid var(--theme-bg-inv-3) !important;
  }
  input:focus{    
    border:1px solid var(--theme-bg-selected) !important;
  }
  .buttonLike {
    outline:none;
  }
  .buttonLike:hover{
    border-color: transparent !important;
    opacity: .8 !important;
  }
  .iconbar .wrapper {
    cursor: pointer;
    height: 45px;
   
  }
  
  .iconbar .wrapper.selected .mdi,
  .iconbar .wrapper:hover .mdi
  {
    color: var( --theme-font-1);
  }
  .iconbar .mdi{    
     transition: all 300ms;
    font-size: 1.7rem !important;
    color: var(--theme-font-1);
  }

  /*ace_editor*/
  .ace_editor{
    font-size: 14px;
  }
  .ace_editor{
    font-family: 'JetBrainsMono NF SemiBold', 'Fira code', 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
    background-color: var(--theme-bg-0);
  }
  .ace_content {
    padding-left: 0;
}
  .ace_gutter-layer{
    background: var(--theme-bg-0);
    border-right: 1px solid var(--theme-bg-0);
  }
  .ace_gutter {
    border-right: 1px solid var( --theme-bg-0);
  }
  .ace_gutter-cell {
    color: var(--theme-font-1);
  }
  .ace_folding-enabled > .ace_gutter-cell {
    padding-left: 30px;
  }
  .theme-type-dark .ace_gutter-cell.ace-gutter-sql-run {
    padding-right: 13px;
  }
  
  .horizontal-split-handle:hover,
  .vertical-split-handle:hover{
    background-color: var(--theme-bg-selected) !important;
  }
  .add-icon .mdi{
    color: var(  --theme-font-1);
  }

  .ace_content {
    border-right: 1px solid var( --theme-bg-3)
    border-left: 1px solid var( --theme-bg-3)
  }

  .file-name.svelte-ks0vy {
    font-size: 12px;
    font-weight: bold;
  }

  .db-name-inner.svelte-ks0vy {
    font-size: 12px;
    font-weight: bold;
  }

  .mdi-view-split-vertical::before, .mdi-plus-circle::before {
    color: var(  --theme-font-1);
  }

  /* action title */
  div.svelte-1msuoss {
    background-color: var( --theme-bg-3);
    border: none;
  }

  div.svelte-1msuoss:hover  {
    background-color: var( --theme-bg-3);
  }

  /* Table */
  td.svelte-1do4nz4 {
    color: var(--theme-font-alt);
  }
  .table.svelte-abhawu {
    font-weight: bold;
    color: var(--theme-font-1);
  }
  /* number inside table color */
  .value.svelte-7yy3rb {
    color: var(--theme-icon-yellow);
  }
  .null.svelte-7yy3rb {
    color: var(--theme-font-link);
  }

  .tab-item.svelte-orhipv {
    font-weight: bold;
  }

  .tab-item.selected.svelte-orhipv {
    background-color: var( --theme-bg-3);
    font-weight: bold;
  }

  /* tool strip */
  .toolstrip.svelte-8bgi65 {
    background-color: var( --theme-bg-0);
    height: 35px;
  }

  
   `,
};

export default {
  themes: [theme],
};
