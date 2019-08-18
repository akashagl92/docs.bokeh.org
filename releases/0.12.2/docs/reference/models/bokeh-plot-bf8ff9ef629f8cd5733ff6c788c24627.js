document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("110e636c-1855-4efc-890f-5e6875254e06");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '110e636c-1855-4efc-890f-5e6875254e06' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"0c06cd26-1ae8-4761-bef9-2dbf3de46ec9":{"roots":{"references":[{"attributes":{"data_source":{"id":"454d9a10-5f3d-4dc4-a30f-c9453be34352","type":"ColumnDataSource"},"glyph":{"id":"d0337d01-a4ed-462a-9a28-fa50fe182828","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"12e9c603-0f84-48e5-b96f-fe21089d0f99","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"454d9a10-5f3d-4dc4-a30f-c9453be34352","type":"ColumnDataSource"},"glyph":{"id":"8bf7520d-5061-4e98-a483-8226beab02e2","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1863039b-6af7-4f90-89c4-b96815fc76c9","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3872ed48-512b-479c-a8ec-644a2a96a8fc","type":"BasicTickFormatter"},"plot":{"id":"27db614d-ce03-4dac-a2ae-be2d24b8a04b","type":"Plot"},"ticker":{"id":"6a3e3c88-a4f5-4643-90aa-c2ec02789ee3","type":"BasicTicker"}},"id":"8a0f8850-660b-45a9-a9ec-cbfafee217d2","type":"LinearAxis"},{"attributes":{},"id":"15e6ed80-1312-472f-8e74-7353bd390318","type":"BasicTicker"},{"attributes":{},"id":"6a3e3c88-a4f5-4643-90aa-c2ec02789ee3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ee99bf9d-6c79-474a-8726-c9cb7149865e","type":"BasicTickFormatter"},"plot":{"id":"27db614d-ce03-4dac-a2ae-be2d24b8a04b","type":"Plot"},"ticker":{"id":"15e6ed80-1312-472f-8e74-7353bd390318","type":"BasicTicker"}},"id":"73913066-fbbf-43c2-bfe8-ba91b280b2e7","type":"LinearAxis"},{"attributes":{},"id":"ee99bf9d-6c79-474a-8726-c9cb7149865e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"27db614d-ce03-4dac-a2ae-be2d24b8a04b","type":"Plot"},"ticker":{"id":"15e6ed80-1312-472f-8e74-7353bd390318","type":"BasicTicker"}},"id":"51f6c0ac-98fe-4f83-94e4-017717cbf4d2","type":"Grid"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"8bf7520d-5061-4e98-a483-8226beab02e2","type":"ImageURL"},{"attributes":{"dimension":1,"plot":{"id":"27db614d-ce03-4dac-a2ae-be2d24b8a04b","type":"Plot"},"ticker":{"id":"6a3e3c88-a4f5-4643-90aa-c2ec02789ee3","type":"BasicTicker"}},"id":"26f92347-1114-4ec8-912a-4d30e49b6624","type":"Grid"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"52d63a40-6c0b-428b-a997-d93795c20472","type":"Range1d"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"8c6bf9de-0eac-40b8-9a08-afa6e89412e6","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x2","y1","h1","w1","url","x1","y2"],"data":{"h1":[10.0,20.0,30.0,40.0,50.0],"url":["http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":[10.0,20.0,30.0,40.0,50.0],"x1":[0.0,37.5,75.0,112.5,150.0],"x2":[-50.0,0.0,50.0,100.0,150.0],"y1":[0.0,37.5,75.0,112.5,150.0],"y2":[0.0,50.0,100.0,150.0,200.0]}},"id":"454d9a10-5f3d-4dc4-a30f-c9453be34352","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"454d9a10-5f3d-4dc4-a30f-c9453be34352","type":"ColumnDataSource"},"glyph":{"id":"3a36b34c-a30b-4a1c-915e-a32c5266ac32","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e34a33f8-8683-4feb-b7f4-b0d995404730","type":"GlyphRenderer"},{"attributes":{"anchor":"bottom_right","url":{"value":"http://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"d0337d01-a4ed-462a-9a28-fa50fe182828","type":"ImageURL"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"3a36b34c-a30b-4a1c-915e-a32c5266ac32","type":"ImageURL"},{"attributes":{},"id":"c6dcb38b-8c76-4b61-8330-e6b828f56fd5","type":"ToolEvents"},{"attributes":{"below":[{"id":"73913066-fbbf-43c2-bfe8-ba91b280b2e7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8a0f8850-660b-45a9-a9ec-cbfafee217d2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e34a33f8-8683-4feb-b7f4-b0d995404730","type":"GlyphRenderer"},{"id":"1863039b-6af7-4f90-89c4-b96815fc76c9","type":"GlyphRenderer"},{"id":"12e9c603-0f84-48e5-b96f-fe21089d0f99","type":"GlyphRenderer"},{"id":"73913066-fbbf-43c2-bfe8-ba91b280b2e7","type":"LinearAxis"},{"id":"8a0f8850-660b-45a9-a9ec-cbfafee217d2","type":"LinearAxis"},{"id":"51f6c0ac-98fe-4f83-94e4-017717cbf4d2","type":"Grid"},{"id":"26f92347-1114-4ec8-912a-4d30e49b6624","type":"Grid"}],"title":null,"tool_events":{"id":"c6dcb38b-8c76-4b61-8330-e6b828f56fd5","type":"ToolEvents"},"toolbar":{"id":"1b93d0db-7a7a-4b36-802d-9dca074206fc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8c6bf9de-0eac-40b8-9a08-afa6e89412e6","type":"Range1d"},"y_range":{"id":"52d63a40-6c0b-428b-a997-d93795c20472","type":"Range1d"}},"id":"27db614d-ce03-4dac-a2ae-be2d24b8a04b","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1b93d0db-7a7a-4b36-802d-9dca074206fc","type":"Toolbar"},{"attributes":{},"id":"3872ed48-512b-479c-a8ec-644a2a96a8fc","type":"BasicTickFormatter"}],"root_ids":["27db614d-ce03-4dac-a2ae-be2d24b8a04b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"0c06cd26-1ae8-4761-bef9-2dbf3de46ec9","elementid":"110e636c-1855-4efc-890f-5e6875254e06","modelid":"27db614d-ce03-4dac-a2ae-be2d24b8a04b"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});