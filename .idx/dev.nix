# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.go
    pkgs.python311
    pkgs.python311Packages.pip
    pkgs.nodejs_20
    pkgs.nodePackages.nodemon
  ];
  
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "42Crunch.vscode-openapi"
      "AMiner.codegeex"
      "amiralizadeh9480.laravel-extra-intellisense"
      "batisteo.vscode-django"
      "bmewburn.vscode-intelephense-client"
      "bradlc.vscode-tailwindcss"
      "codingyu.laravel-goto-view"
      "dbaeumer.vscode-eslint"
      "donjayamanne.python-environment-manager"
      "donjayamanne.python-extension-pack"
      "dsznajder.es7-react-js-snippets"
      "ecmel.vscode-html-css"
      "EditorConfig.EditorConfig"
      "esbenp.prettier-vscode"
      "felixfbecker.php-pack"
      "formulahendry.auto-close-tag"
      "formulahendry.auto-complete-tag"
      "formulahendry.auto-rename-tag"
      "golang.go"
      "HansUXdev.bootstrap5-snippets"
      "humao.rest-client"
      "KevinRose.vsc-python-indent"
      "mathiasfrohlich.Kotlin"
      "mechatroner.rainbow-csv"
      "MehediDracula.php-namespace-resolver"
      "mikestead.dotenv"
      "mohamedbenhida.laravel-intellisense"
      "ms-python.debugpy"
      "ms-python.python"
      "ms-toolsai.jupyter"
      "ms-toolsai.jupyter-keymap"
      "ms-toolsai.jupyter-renderers"
      "ms-toolsai.vscode-jupyter-cell-tags"
      "ms-toolsai.vscode-jupyter-slideshow"
      "ms-vscode.cmake-tools"
      "ms-vscode.cpptools-themes"
      "ms-vscode.makefile-tools"
      "ms-vscode.powershell"
      "naoray.laravel-goto-components"
      "njpwerner.autodocstring"
      "njqdev.vscode-python-typehint"
      "onecentlin.laravel-blade"
      "onecentlin.laravel5-snippets"
      "pranaygp.vscode-css-peek"
      "Prisma.prisma"
      "redhat.vscode-yaml"
      "ritwickdey.LiveServer"
      "shufo.vscode-blade-formatter"
      "twxs.cmake"
      "wholroyd.jinja"
      "xdebug.php-debug"
      "Zignd.html-css-class-completion"
      "zobo.php-intellisense"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
        # web = {
        #   # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
        #   # and show it in IDX's web preview panel
        #   command = ["npm" "run" "dev"];
        #   manager = "web";
          # env = {
          #   # Environment variables to set for your server
          #   PORT = "$PORT";
          # };
        # };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # Example: install JS dependencies from NPM
        # npm-install = "npm install";
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
      };
    };
  };
}
