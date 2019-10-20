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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("e704745b-cad7-46ba-b9ef-6a08f97926f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e704745b-cad7-46ba-b9ef-6a08f97926f1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"13d391c3-4539-4bf0-b0c3-51ff77383901":{"roots":{"references":[{"attributes":{},"id":"4e0f7449-9f7f-458b-8242-68da886fcd6f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4e0f7449-9f7f-458b-8242-68da886fcd6f","type":"BasicTickFormatter"},"plot":{"id":"6cae67b9-332e-43c2-9682-0518b24fa866","type":"Plot"},"ticker":{"id":"94c2edf7-201c-466e-946f-ffcdd0d0978d","type":"BasicTicker"}},"id":"04e40964-5fbd-438b-9294-0c59c2fe8b8b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8436880f-f2f5-4dcf-b1c1-c7cc2dee28bb","type":"BasicTickFormatter"},"plot":{"id":"6cae67b9-332e-43c2-9682-0518b24fa866","type":"Plot"},"ticker":{"id":"fc0ed603-a211-4ef6-8791-b1c63745f913","type":"BasicTicker"}},"id":"b21b6845-3927-402a-82e3-a2c966c4d915","type":"LinearAxis"},{"attributes":{"plot":{"id":"6cae67b9-332e-43c2-9682-0518b24fa866","type":"Plot"},"ticker":{"id":"94c2edf7-201c-466e-946f-ffcdd0d0978d","type":"BasicTicker"}},"id":"e8d00975-841d-4fe9-afcc-96fa520648cb","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"e4d0454e-b156-4adc-92ef-18135a60993e","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"3c62d0b5-6ed9-49d0-ac1e-febdc48018d1","type":"DataRange1d"},{"attributes":{},"id":"fc0ed603-a211-4ef6-8791-b1c63745f913","type":"BasicTicker"},{"attributes":{"below":[{"id":"04e40964-5fbd-438b-9294-0c59c2fe8b8b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b21b6845-3927-402a-82e3-a2c966c4d915","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"610e3464-0f7a-4f05-a4db-70be932648bf","type":"GlyphRenderer"},{"id":"04e40964-5fbd-438b-9294-0c59c2fe8b8b","type":"LinearAxis"},{"id":"b21b6845-3927-402a-82e3-a2c966c4d915","type":"LinearAxis"},{"id":"e8d00975-841d-4fe9-afcc-96fa520648cb","type":"Grid"},{"id":"6d9796cf-3098-4016-86b0-a4fd1abf71c1","type":"Grid"}],"title":null,"tool_events":{"id":"37b4df77-5f7f-41c8-87e6-a0e6c03d7905","type":"ToolEvents"},"toolbar":{"id":"104464ec-1c89-43ae-a10b-3c9c80b6c864","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3c62d0b5-6ed9-49d0-ac1e-febdc48018d1","type":"DataRange1d"},"x_scale":{"id":"1dedc258-e0b7-4f41-97aa-f4faae0c7868","type":"LinearScale"},"y_range":{"id":"f374bf1f-0c46-4f79-8bed-0bbf6d103caa","type":"DataRange1d"},"y_scale":{"id":"6779cee1-0b93-4748-8cc2-a1f17339ea63","type":"LinearScale"}},"id":"6cae67b9-332e-43c2-9682-0518b24fa866","type":"Plot"},{"attributes":{"callback":null},"id":"f374bf1f-0c46-4f79-8bed-0bbf6d103caa","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1187777c-bc65-4053-b1dc-dc9fed9e908a","type":"Square"},{"attributes":{},"id":"94c2edf7-201c-466e-946f-ffcdd0d0978d","type":"BasicTicker"},{"attributes":{},"id":"37b4df77-5f7f-41c8-87e6-a0e6c03d7905","type":"ToolEvents"},{"attributes":{},"id":"8436880f-f2f5-4dcf-b1c1-c7cc2dee28bb","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e4d0454e-b156-4adc-92ef-18135a60993e","type":"ColumnDataSource"},"glyph":{"id":"1187777c-bc65-4053-b1dc-dc9fed9e908a","type":"Square"},"hover_glyph":null,"muted_glyph":null},"id":"610e3464-0f7a-4f05-a4db-70be932648bf","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"104464ec-1c89-43ae-a10b-3c9c80b6c864","type":"Toolbar"},{"attributes":{},"id":"1dedc258-e0b7-4f41-97aa-f4faae0c7868","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"6cae67b9-332e-43c2-9682-0518b24fa866","type":"Plot"},"ticker":{"id":"fc0ed603-a211-4ef6-8791-b1c63745f913","type":"BasicTicker"}},"id":"6d9796cf-3098-4016-86b0-a4fd1abf71c1","type":"Grid"},{"attributes":{},"id":"6779cee1-0b93-4748-8cc2-a1f17339ea63","type":"LinearScale"}],"root_ids":["6cae67b9-332e-43c2-9682-0518b24fa866"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"13d391c3-4539-4bf0-b0c3-51ff77383901","elementid":"e704745b-cad7-46ba-b9ef-6a08f97926f1","modelid":"6cae67b9-332e-43c2-9682-0518b24fa866"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
