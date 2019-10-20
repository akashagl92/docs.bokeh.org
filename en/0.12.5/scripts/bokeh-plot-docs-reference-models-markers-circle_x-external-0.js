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
      };var element = document.getElementById("2f078973-7991-49f7-be5d-f8ebbdbaf12a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2f078973-7991-49f7-be5d-f8ebbdbaf12a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"cbceaae6-66b8-47da-b440-c6c16ec7feb3":{"roots":{"references":[{"attributes":{},"id":"9116fe9b-6b1c-49c7-a147-9710309ef07b","type":"ToolEvents"},{"attributes":{"callback":null},"id":"c348fc51-46a3-4f63-9176-957ae0fd68a7","type":"DataRange1d"},{"attributes":{},"id":"d1390250-f905-47c2-8036-9099e9c1e6b2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"a84ec314-925f-4cf4-a8ac-bd3fe5ce8878","type":"ColumnDataSource"},"glyph":{"id":"9da0d897-0221-4c6a-abd9-1361e54f0c3b","type":"CircleX"},"hover_glyph":null,"muted_glyph":null},"id":"a7a14927-344d-47e0-bf36-273ec2192a9f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"9a339494-aa69-4d4f-a552-93b52b534655","type":"BasicTickFormatter"},"plot":{"id":"ae01a902-a30e-439b-b394-64d466a4656c","type":"Plot"},"ticker":{"id":"d1390250-f905-47c2-8036-9099e9c1e6b2","type":"BasicTicker"}},"id":"a4dc5e3f-fbb8-4f95-a09a-69ab4f5b7b63","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"ae01a902-a30e-439b-b394-64d466a4656c","type":"Plot"},"ticker":{"id":"d1390250-f905-47c2-8036-9099e9c1e6b2","type":"BasicTicker"}},"id":"cb8cd3ef-2455-4b57-8974-bdba96600593","type":"Grid"},{"attributes":{},"id":"1ac6027a-a467-44a1-852e-5816b6e98289","type":"BasicTicker"},{"attributes":{"plot":{"id":"ae01a902-a30e-439b-b394-64d466a4656c","type":"Plot"},"ticker":{"id":"1ac6027a-a467-44a1-852e-5816b6e98289","type":"BasicTicker"}},"id":"4446ba6b-dffc-4d77-bb07-91a87b0b0945","type":"Grid"},{"attributes":{"callback":null},"id":"1665f943-1bc4-4941-9e58-2e4c9acde180","type":"DataRange1d"},{"attributes":{"formatter":{"id":"b9bf19a7-5b90-4eb9-a00c-7bbe273ae517","type":"BasicTickFormatter"},"plot":{"id":"ae01a902-a30e-439b-b394-64d466a4656c","type":"Plot"},"ticker":{"id":"1ac6027a-a467-44a1-852e-5816b6e98289","type":"BasicTicker"}},"id":"598f05a3-2448-41b4-a252-7ee967e88766","type":"LinearAxis"},{"attributes":{"below":[{"id":"598f05a3-2448-41b4-a252-7ee967e88766","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a4dc5e3f-fbb8-4f95-a09a-69ab4f5b7b63","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a7a14927-344d-47e0-bf36-273ec2192a9f","type":"GlyphRenderer"},{"id":"598f05a3-2448-41b4-a252-7ee967e88766","type":"LinearAxis"},{"id":"a4dc5e3f-fbb8-4f95-a09a-69ab4f5b7b63","type":"LinearAxis"},{"id":"4446ba6b-dffc-4d77-bb07-91a87b0b0945","type":"Grid"},{"id":"cb8cd3ef-2455-4b57-8974-bdba96600593","type":"Grid"}],"title":null,"tool_events":{"id":"9116fe9b-6b1c-49c7-a147-9710309ef07b","type":"ToolEvents"},"toolbar":{"id":"412446c7-f353-4330-beef-571244b7d13f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c348fc51-46a3-4f63-9176-957ae0fd68a7","type":"DataRange1d"},"y_range":{"id":"1665f943-1bc4-4941-9e58-2e4c9acde180","type":"DataRange1d"}},"id":"ae01a902-a30e-439b-b394-64d466a4656c","type":"Plot"},{"attributes":{},"id":"9a339494-aa69-4d4f-a552-93b52b534655","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9da0d897-0221-4c6a-abd9-1361e54f0c3b","type":"CircleX"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"a84ec314-925f-4cf4-a8ac-bd3fe5ce8878","type":"ColumnDataSource"},{"attributes":{},"id":"b9bf19a7-5b90-4eb9-a00c-7bbe273ae517","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"412446c7-f353-4330-beef-571244b7d13f","type":"Toolbar"}],"root_ids":["ae01a902-a30e-439b-b394-64d466a4656c"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"cbceaae6-66b8-47da-b440-c6c16ec7feb3","elementid":"2f078973-7991-49f7-be5d-f8ebbdbaf12a","modelid":"ae01a902-a30e-439b-b394-64d466a4656c"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
