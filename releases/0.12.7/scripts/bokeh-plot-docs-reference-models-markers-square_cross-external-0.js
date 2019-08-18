(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("39d0001c-05ae-4379-8d7b-dcb2f7fbf4f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '39d0001c-05ae-4379-8d7b-dcb2f7fbf4f1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"e9ab2a9f-0afb-424a-8b34-5ca097b16de2":{"roots":{"references":[{"attributes":{"callback":null},"id":"10b70b83-5f03-4071-a36d-2b384685acd1","type":"DataRange1d"},{"attributes":{},"id":"c2b58bd6-c275-4797-baca-7dc17e578754","type":"LinearScale"},{"attributes":{"source":{"id":"3a082ade-294e-4181-a108-2f1c4793d58b","type":"ColumnDataSource"}},"id":"39c163f7-0f4c-49e1-a0c6-b72428b295d1","type":"CDSView"},{"attributes":{},"id":"5c2f0992-aa57-4716-b121-5459ed8be4e6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"106e7d8d-0228-443e-84da-49953e2dfdf0","type":"BasicTickFormatter"},"plot":{"id":"f46be66a-ceb8-4d8a-b058-3566a500bae7","type":"Plot"},"ticker":{"id":"7d46fc46-0316-4009-bdeb-8d2f2e52c863","type":"BasicTicker"}},"id":"fc5533cd-1249-4a13-a81a-78e836810c28","type":"LinearAxis"},{"attributes":{"formatter":{"id":"589b3243-f645-431f-bcb1-71f4d09d8477","type":"BasicTickFormatter"},"plot":{"id":"f46be66a-ceb8-4d8a-b058-3566a500bae7","type":"Plot"},"ticker":{"id":"5c2f0992-aa57-4716-b121-5459ed8be4e6","type":"BasicTicker"}},"id":"38d16815-54f2-4b08-ac19-10d5d13d3af1","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef42915d-817e-45b3-994f-d172a7a08626","type":"SquareCross"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c601f611-617a-47af-8e0e-dc1baf3cd7c4","type":"Toolbar"},{"attributes":{},"id":"106e7d8d-0228-443e-84da-49953e2dfdf0","type":"BasicTickFormatter"},{"attributes":{},"id":"eb69aefa-26c5-492a-941a-1cb2dcdb7cdd","type":"LinearScale"},{"attributes":{"callback":null},"id":"bdc1593f-4811-42e6-abd9-ff80dd5267ed","type":"DataRange1d"},{"attributes":{},"id":"589b3243-f645-431f-bcb1-71f4d09d8477","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"f46be66a-ceb8-4d8a-b058-3566a500bae7","type":"Plot"},"ticker":{"id":"7d46fc46-0316-4009-bdeb-8d2f2e52c863","type":"BasicTicker"}},"id":"4d9fba9b-9f16-48aa-8964-3f23474e6dcf","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"3a082ade-294e-4181-a108-2f1c4793d58b","type":"ColumnDataSource"},{"attributes":{},"id":"7d46fc46-0316-4009-bdeb-8d2f2e52c863","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3a082ade-294e-4181-a108-2f1c4793d58b","type":"ColumnDataSource"},"glyph":{"id":"ef42915d-817e-45b3-994f-d172a7a08626","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"39c163f7-0f4c-49e1-a0c6-b72428b295d1","type":"CDSView"}},"id":"49d6b4ad-3445-4280-a058-78fbd9c83ee5","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f46be66a-ceb8-4d8a-b058-3566a500bae7","type":"Plot"},"ticker":{"id":"5c2f0992-aa57-4716-b121-5459ed8be4e6","type":"BasicTicker"}},"id":"46c1c863-fc25-4581-82d7-f681e742bc6a","type":"Grid"},{"attributes":{"below":[{"id":"38d16815-54f2-4b08-ac19-10d5d13d3af1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"fc5533cd-1249-4a13-a81a-78e836810c28","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"49d6b4ad-3445-4280-a058-78fbd9c83ee5","type":"GlyphRenderer"},{"id":"38d16815-54f2-4b08-ac19-10d5d13d3af1","type":"LinearAxis"},{"id":"fc5533cd-1249-4a13-a81a-78e836810c28","type":"LinearAxis"},{"id":"46c1c863-fc25-4581-82d7-f681e742bc6a","type":"Grid"},{"id":"4d9fba9b-9f16-48aa-8964-3f23474e6dcf","type":"Grid"}],"title":null,"toolbar":{"id":"c601f611-617a-47af-8e0e-dc1baf3cd7c4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"bdc1593f-4811-42e6-abd9-ff80dd5267ed","type":"DataRange1d"},"x_scale":{"id":"c2b58bd6-c275-4797-baca-7dc17e578754","type":"LinearScale"},"y_range":{"id":"10b70b83-5f03-4071-a36d-2b384685acd1","type":"DataRange1d"},"y_scale":{"id":"eb69aefa-26c5-492a-941a-1cb2dcdb7cdd","type":"LinearScale"}},"id":"f46be66a-ceb8-4d8a-b058-3566a500bae7","type":"Plot"}],"root_ids":["f46be66a-ceb8-4d8a-b058-3566a500bae7"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e9ab2a9f-0afb-424a-8b34-5ca097b16de2","elementid":"39d0001c-05ae-4379-8d7b-dcb2f7fbf4f1","modelid":"f46be66a-ceb8-4d8a-b058-3566a500bae7"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
