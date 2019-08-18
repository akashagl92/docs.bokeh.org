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
      };var element = document.getElementById("e8af30bf-750b-49a3-b952-c6c64ef43af6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e8af30bf-750b-49a3-b952-c6c64ef43af6' but no matching script tag was found. ")
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
                var docs_json = {"ef7bc47b-ca1e-45c3-9af6-1f9870c9a934":{"roots":{"references":[{"attributes":{},"id":"04cb8895-f566-4590-976c-86058e301518","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"04cb8895-f566-4590-976c-86058e301518","type":"BasicTickFormatter"},"plot":{"id":"579c17db-0f1a-403e-883b-d13696cc0511","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c5009f4-debf-4ca2-8f5f-540e4c9e308d","type":"BasicTicker"}},"id":"8bdd81cb-47f5-47b1-9dd3-20dfae99f67d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4f50ee3c-0e06-42bc-ac52-903680844b59","type":"DataRange1d"},{"attributes":{},"id":"f3e6c588-0a19-4565-9819-a9707e274e5f","type":"LinearScale"},{"attributes":{},"id":"0c5009f4-debf-4ca2-8f5f-540e4c9e308d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"eda681ce-14cf-47cb-8060-c94e36b81e2c","type":"Circle"},{"attributes":{"plot":{"id":"579c17db-0f1a-403e-883b-d13696cc0511","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3810f5d-111f-4e9c-b4d8-b5f7bf2742a2","type":"BasicTicker"}},"id":"e43927f6-416e-4c4e-8ce8-69776930b7bb","type":"Grid"},{"attributes":{},"id":"a3810f5d-111f-4e9c-b4d8-b5f7bf2742a2","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c3fafe0c-5a0c-452d-b967-465eee13cd02","type":"BasicTickFormatter"},"plot":{"id":"579c17db-0f1a-403e-883b-d13696cc0511","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3810f5d-111f-4e9c-b4d8-b5f7bf2742a2","type":"BasicTicker"}},"id":"32b73666-53bf-4545-9a60-685d92a3931b","type":"LinearAxis"},{"attributes":{},"id":"34ce02b4-69bc-415e-ab2c-a0448aa98fe8","type":"LinearScale"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"999cf0d4-9149-4320-a137-8079f414ac68","type":"Title"},{"attributes":{"callback":null,"plot":{"id":"579c17db-0f1a-403e-883b-d13696cc0511","subtype":"Figure","type":"Plot"},"tooltips":"\n    <div>\n        <div>\n            <img\n                src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                style=\"float: left; margin: 0px 15px 15px 0px;\"\n                border=\"2\"\n            ></img>\n        </div>\n        <div>\n            <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n            <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n        </div>\n        <div>\n            <span>@fonts{safe}</span>\n        </div>\n        <div>\n            <span style=\"font-size: 15px;\">Location</span>\n            <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n        </div>\n    </div>\n    "},"id":"80353b32-0035-4b13-a6b0-893dee8bcd52","type":"HoverTool"},{"attributes":{"data_source":{"id":"a8a7aa31-bc51-4406-aae8-6d73d8ab80d8","type":"ColumnDataSource"},"glyph":{"id":"eda681ce-14cf-47cb-8060-c94e36b81e2c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dca29eed-e968-4b84-8e81-306f02731457","type":"Circle"},"selection_glyph":null},"id":"41d97ecf-7b30-4391-af1a-0c89890266d7","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"579c17db-0f1a-403e-883b-d13696cc0511","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c5009f4-debf-4ca2-8f5f-540e4c9e308d","type":"BasicTicker"}},"id":"b4797008-082d-49ea-8234-2d8d37f5ad33","type":"Grid"},{"attributes":{"callback":null},"id":"7aca1124-a430-4ab5-b184-dce5ef23cdba","type":"DataRange1d"},{"attributes":{},"id":"8b450cca-6881-4103-b82a-cca04c17ea12","type":"ToolEvents"},{"attributes":{"below":[{"id":"32b73666-53bf-4545-9a60-685d92a3931b","type":"LinearAxis"}],"left":[{"id":"8bdd81cb-47f5-47b1-9dd3-20dfae99f67d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"32b73666-53bf-4545-9a60-685d92a3931b","type":"LinearAxis"},{"id":"e43927f6-416e-4c4e-8ce8-69776930b7bb","type":"Grid"},{"id":"8bdd81cb-47f5-47b1-9dd3-20dfae99f67d","type":"LinearAxis"},{"id":"b4797008-082d-49ea-8234-2d8d37f5ad33","type":"Grid"},{"id":"41d97ecf-7b30-4391-af1a-0c89890266d7","type":"GlyphRenderer"}],"title":{"id":"999cf0d4-9149-4320-a137-8079f414ac68","type":"Title"},"tool_events":{"id":"8b450cca-6881-4103-b82a-cca04c17ea12","type":"ToolEvents"},"toolbar":{"id":"e342c881-50dc-4753-9571-db3c743c03d9","type":"Toolbar"},"x_range":{"id":"7aca1124-a430-4ab5-b184-dce5ef23cdba","type":"DataRange1d"},"x_scale":{"id":"f3e6c588-0a19-4565-9819-a9707e274e5f","type":"LinearScale"},"y_range":{"id":"4f50ee3c-0e06-42bc-ac52-903680844b59","type":"DataRange1d"},"y_scale":{"id":"34ce02b4-69bc-415e-ab2c-a0448aa98fe8","type":"LinearScale"}},"id":"579c17db-0f1a-403e-883b-d13696cc0511","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["desc","imgs","fonts","y","x"],"data":{"desc":["A","b","C","d","E"],"fonts":["<i>italics</i>","<pre>pre</pre>","<b>bold</b>","<small>small</small>","<del>del</del>"],"imgs":["http://bokeh.pydata.org/static/snake.jpg","http://bokeh.pydata.org/static/snake2.png","http://bokeh.pydata.org/static/snake3D.png","http://bokeh.pydata.org/static/snake4_TheRevenge.png","http://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"a8a7aa31-bc51-4406-aae8-6d73d8ab80d8","type":"ColumnDataSource"},{"attributes":{},"id":"c3fafe0c-5a0c-452d-b967-465eee13cd02","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"80353b32-0035-4b13-a6b0-893dee8bcd52","type":"HoverTool"}]},"id":"e342c881-50dc-4753-9571-db3c743c03d9","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"dca29eed-e968-4b84-8e81-306f02731457","type":"Circle"}],"root_ids":["579c17db-0f1a-403e-883b-d13696cc0511"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"ef7bc47b-ca1e-45c3-9af6-1f9870c9a934","elementid":"e8af30bf-750b-49a3-b952-c6c64ef43af6","modelid":"579c17db-0f1a-403e-883b-d13696cc0511"}];
                
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
