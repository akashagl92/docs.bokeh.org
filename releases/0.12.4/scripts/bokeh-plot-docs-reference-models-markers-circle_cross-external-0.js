(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("df99ac6a-50b8-4633-a48c-3fab2e1dbb1c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'df99ac6a-50b8-4633-a48c-3fab2e1dbb1c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"de5b3744-969d-444e-8507-6831fccf1b9c":{"roots":{"references":[{"attributes":{"callback":null},"id":"cea18a6b-1dd9-4c1f-a6d9-41c2fc56c8e9","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b906a3d9-24bc-45b0-b7ca-8696cc14ccf9","type":"CircleCross"},{"attributes":{},"id":"80958059-0868-4c67-a79b-c169a22f59c2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"38edb4ce-d5fc-4846-b23d-a86bdcef09e9","type":"ColumnDataSource"},"glyph":{"id":"b906a3d9-24bc-45b0-b7ca-8696cc14ccf9","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fdfe562a-df06-4042-af4b-def4e633a40c","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"244c2d4b-1d01-45dc-943f-6a008a6838a3","type":"Toolbar"},{"attributes":{},"id":"a39d45c1-9f8a-4884-9d7d-b976aee8cab4","type":"BasicTickFormatter"},{"attributes":{},"id":"1f6862c7-48df-4f2a-8e0a-c95d9f3509bf","type":"ToolEvents"},{"attributes":{"below":[{"id":"4ff6f241-972a-44d3-ba6b-3281594a36f0","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6dfb1186-875b-4a1b-91f0-8f718d8a3f54","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fdfe562a-df06-4042-af4b-def4e633a40c","type":"GlyphRenderer"},{"id":"4ff6f241-972a-44d3-ba6b-3281594a36f0","type":"LinearAxis"},{"id":"6dfb1186-875b-4a1b-91f0-8f718d8a3f54","type":"LinearAxis"},{"id":"ce11d067-472f-4381-bdbd-1d1242f07444","type":"Grid"},{"id":"53306964-78ee-4835-9da4-180017521c5f","type":"Grid"}],"title":null,"tool_events":{"id":"1f6862c7-48df-4f2a-8e0a-c95d9f3509bf","type":"ToolEvents"},"toolbar":{"id":"244c2d4b-1d01-45dc-943f-6a008a6838a3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fb8dab29-014a-4f4a-8820-54e3da693db9","type":"DataRange1d"},"y_range":{"id":"cea18a6b-1dd9-4c1f-a6d9-41c2fc56c8e9","type":"DataRange1d"}},"id":"49b1f098-0870-49db-9a9e-1d538a927224","type":"Plot"},{"attributes":{"plot":{"id":"49b1f098-0870-49db-9a9e-1d538a927224","type":"Plot"},"ticker":{"id":"80958059-0868-4c67-a79b-c169a22f59c2","type":"BasicTicker"}},"id":"ce11d067-472f-4381-bdbd-1d1242f07444","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"49b1f098-0870-49db-9a9e-1d538a927224","type":"Plot"},"ticker":{"id":"f95792da-4423-40db-966b-d8f32f2438ec","type":"BasicTicker"}},"id":"53306964-78ee-4835-9da4-180017521c5f","type":"Grid"},{"attributes":{},"id":"aff8311f-e6e2-4fe9-b33e-b9a96e92a1a9","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"38edb4ce-d5fc-4846-b23d-a86bdcef09e9","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"fb8dab29-014a-4f4a-8820-54e3da693db9","type":"DataRange1d"},{"attributes":{},"id":"f95792da-4423-40db-966b-d8f32f2438ec","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a39d45c1-9f8a-4884-9d7d-b976aee8cab4","type":"BasicTickFormatter"},"plot":{"id":"49b1f098-0870-49db-9a9e-1d538a927224","type":"Plot"},"ticker":{"id":"f95792da-4423-40db-966b-d8f32f2438ec","type":"BasicTicker"}},"id":"6dfb1186-875b-4a1b-91f0-8f718d8a3f54","type":"LinearAxis"},{"attributes":{"formatter":{"id":"aff8311f-e6e2-4fe9-b33e-b9a96e92a1a9","type":"BasicTickFormatter"},"plot":{"id":"49b1f098-0870-49db-9a9e-1d538a927224","type":"Plot"},"ticker":{"id":"80958059-0868-4c67-a79b-c169a22f59c2","type":"BasicTicker"}},"id":"4ff6f241-972a-44d3-ba6b-3281594a36f0","type":"LinearAxis"}],"root_ids":["49b1f098-0870-49db-9a9e-1d538a927224"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"de5b3744-969d-444e-8507-6831fccf1b9c","elementid":"df99ac6a-50b8-4633-a48c-3fab2e1dbb1c","modelid":"49b1f098-0870-49db-9a9e-1d538a927224"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
