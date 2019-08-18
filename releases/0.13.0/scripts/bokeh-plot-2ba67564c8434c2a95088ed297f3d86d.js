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
      };var element = document.getElementById("7711d7d4-69e8-4266-a585-7ac9b410dcdf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7711d7d4-69e8-4266-a585-7ac9b410dcdf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"a2937a36-5a34-4e57-b1f4-0005e3771e6f":{"roots":{"references":[{"attributes":{"empty_value":"black","renderers":[{"id":"9e46ee5a-4bf5-47b0-bfc4-5476b544bdf8","type":"GlyphRenderer"}]},"id":"1ebef33e-f034-4eb8-8c34-05f164325160","type":"PointDrawTool"},{"attributes":{"children":[{"id":"5b6ef3f0-d385-4958-8291-71d88f7898b3","subtype":"Figure","type":"Plot"},{"id":"6cb7bd70-8815-4cbe-843b-05c3f96c6f00","type":"WidgetBox"}]},"id":"4deec3e7-5977-4dfa-830a-e486b035e767","type":"Column"},{"attributes":{"source":{"id":"e4deab4f-5da5-43fd-93d1-cc1ed040e981","type":"ColumnDataSource"}},"id":"525fc6bb-9589-44b5-85c8-2e5ed9442d34","type":"CDSView"},{"attributes":{},"id":"f82f1014-5bdb-4cd1-8794-204efff9c04b","type":"StringEditor"},{"attributes":{},"id":"1aa2f4c6-a049-4794-9b93-4bf9bfa7341b","type":"UnionRenderers"},{"attributes":{"children":[{"id":"b79cc30b-f772-48f0-bf31-b53eb433b99e","type":"DataTable"}],"height":200},"id":"6cb7bd70-8815-4cbe-843b-05c3f96c6f00","type":"WidgetBox"},{"attributes":{},"id":"305ff8aa-72a5-4c0c-8a6b-453217b71263","type":"BasicTickFormatter"},{"attributes":{},"id":"2663342f-6734-46b4-9df6-e8620cf836fb","type":"StringEditor"},{"attributes":{"columns":[{"id":"72b78407-2aa8-40e4-ae4a-7efeb728e641","type":"TableColumn"},{"id":"c8a0dcd7-85f2-4520-ae09-5d2a5fdedc47","type":"TableColumn"},{"id":"4fc0a426-2c83-40ae-ba9e-41c2387b6283","type":"TableColumn"}],"editable":true,"height":200,"source":{"id":"e4deab4f-5da5-43fd-93d1-cc1ed040e981","type":"ColumnDataSource"},"view":{"id":"525fc6bb-9589-44b5-85c8-2e5ed9442d34","type":"CDSView"}},"id":"b79cc30b-f772-48f0-bf31-b53eb433b99e","type":"DataTable"},{"attributes":{"callback":null,"data":{"color":["red","green","yellow"],"x":[1,5,9],"y":[1,5,9]},"selected":{"id":"f73622fd-5c95-482b-88e3-2a69c5f2f745","type":"Selection"},"selection_policy":{"id":"1aa2f4c6-a049-4794-9b93-4bf9bfa7341b","type":"UnionRenderers"}},"id":"e4deab4f-5da5-43fd-93d1-cc1ed040e981","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":10},"id":"68b66af0-063a-480e-9ffd-17f43ee8ed8d","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e03dc16-4560-42b3-b853-d475a1cc833e","type":"Circle"},{"attributes":{"source":{"id":"e4deab4f-5da5-43fd-93d1-cc1ed040e981","type":"ColumnDataSource"}},"id":"da6fb718-8643-4597-a771-9c10de0234ba","type":"CDSView"},{"attributes":{"plot":null,"text":"Point Draw Tool"},"id":"f10626c5-85e5-43d9-81db-6f08b327164d","type":"Title"},{"attributes":{"editor":{"id":"0d4cbc8d-c33d-4b92-8d0b-6bc4f7267db7","type":"StringEditor"},"field":"color","formatter":{"id":"1912df32-3abd-463f-a740-0649fb7ce05d","type":"StringFormatter"},"title":"color"},"id":"4fc0a426-2c83-40ae-ba9e-41c2387b6283","type":"TableColumn"},{"attributes":{"callback":null,"end":10},"id":"2288f4a1-ca9e-46ac-b305-42386f8d76bb","type":"Range1d"},{"attributes":{"editor":{"id":"2663342f-6734-46b4-9df6-e8620cf836fb","type":"StringEditor"},"field":"y","formatter":{"id":"e3b49023-db55-48b3-9f92-a6d58042bcfe","type":"StringFormatter"},"title":"y"},"id":"c8a0dcd7-85f2-4520-ae09-5d2a5fdedc47","type":"TableColumn"},{"attributes":{"dimension":1,"plot":{"id":"5b6ef3f0-d385-4958-8291-71d88f7898b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"adfdd03f-1302-4951-b1c5-5ae13cefde93","type":"BasicTicker"}},"id":"9640d1c6-0577-45f0-b3e2-e3ea623c4d6c","type":"Grid"},{"attributes":{},"id":"0d4cbc8d-c33d-4b92-8d0b-6bc4f7267db7","type":"StringEditor"},{"attributes":{"data_source":{"id":"e4deab4f-5da5-43fd-93d1-cc1ed040e981","type":"ColumnDataSource"},"glyph":{"id":"3fdf83d2-0ca9-4ffd-b6c7-7f548da8f97e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9e03dc16-4560-42b3-b853-d475a1cc833e","type":"Circle"},"selection_glyph":null,"view":{"id":"da6fb718-8643-4597-a771-9c10de0234ba","type":"CDSView"}},"id":"9e46ee5a-4bf5-47b0-bfc4-5476b544bdf8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5b6ef3f0-d385-4958-8291-71d88f7898b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f73da93-c970-4c0f-8e1d-ed6b10f69aef","type":"BasicTicker"}},"id":"97e6a5d4-ad2c-478f-9290-e78233d69e4b","type":"Grid"},{"attributes":{},"id":"37bac835-a4f9-468f-bd6c-1a0648d168bf","type":"StringFormatter"},{"attributes":{},"id":"a270c63d-f0d6-44c9-a130-a7f54a3facf2","type":"BasicTickFormatter"},{"attributes":{},"id":"1912df32-3abd-463f-a740-0649fb7ce05d","type":"StringFormatter"},{"attributes":{},"id":"adfdd03f-1302-4951-b1c5-5ae13cefde93","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3fdf83d2-0ca9-4ffd-b6c7-7f548da8f97e","type":"Circle"},{"attributes":{"background_fill_color":{"value":"lightgrey"},"below":[{"id":"6a9fb709-126b-4f0b-b5f0-2c149cca9556","type":"LinearAxis"}],"left":[{"id":"c5284fdd-b5a3-4031-8c0b-aa6877fa5d96","type":"LinearAxis"}],"renderers":[{"id":"6a9fb709-126b-4f0b-b5f0-2c149cca9556","type":"LinearAxis"},{"id":"97e6a5d4-ad2c-478f-9290-e78233d69e4b","type":"Grid"},{"id":"c5284fdd-b5a3-4031-8c0b-aa6877fa5d96","type":"LinearAxis"},{"id":"9640d1c6-0577-45f0-b3e2-e3ea623c4d6c","type":"Grid"},{"id":"9e46ee5a-4bf5-47b0-bfc4-5476b544bdf8","type":"GlyphRenderer"}],"title":{"id":"f10626c5-85e5-43d9-81db-6f08b327164d","type":"Title"},"toolbar":{"id":"dd11a528-eea9-4d25-b9b9-95f6a779ff13","type":"Toolbar"},"x_range":{"id":"2288f4a1-ca9e-46ac-b305-42386f8d76bb","type":"Range1d"},"x_scale":{"id":"cbd3d8e9-ee41-42f1-86df-4f3bc8d4cb9c","type":"LinearScale"},"y_range":{"id":"68b66af0-063a-480e-9ffd-17f43ee8ed8d","type":"Range1d"},"y_scale":{"id":"d8be4dd9-3e32-420c-b810-e63aa6cf0f01","type":"LinearScale"}},"id":"5b6ef3f0-d385-4958-8291-71d88f7898b3","subtype":"Figure","type":"Plot"},{"attributes":{"editor":{"id":"f82f1014-5bdb-4cd1-8794-204efff9c04b","type":"StringEditor"},"field":"x","formatter":{"id":"37bac835-a4f9-468f-bd6c-1a0648d168bf","type":"StringFormatter"},"title":"x"},"id":"72b78407-2aa8-40e4-ae4a-7efeb728e641","type":"TableColumn"},{"attributes":{"formatter":{"id":"305ff8aa-72a5-4c0c-8a6b-453217b71263","type":"BasicTickFormatter"},"plot":{"id":"5b6ef3f0-d385-4958-8291-71d88f7898b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f73da93-c970-4c0f-8e1d-ed6b10f69aef","type":"BasicTicker"}},"id":"6a9fb709-126b-4f0b-b5f0-2c149cca9556","type":"LinearAxis"},{"attributes":{},"id":"f73622fd-5c95-482b-88e3-2a69c5f2f745","type":"Selection"},{"attributes":{"formatter":{"id":"a270c63d-f0d6-44c9-a130-a7f54a3facf2","type":"BasicTickFormatter"},"plot":{"id":"5b6ef3f0-d385-4958-8291-71d88f7898b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"adfdd03f-1302-4951-b1c5-5ae13cefde93","type":"BasicTicker"}},"id":"c5284fdd-b5a3-4031-8c0b-aa6877fa5d96","type":"LinearAxis"},{"attributes":{},"id":"8f73da93-c970-4c0f-8e1d-ed6b10f69aef","type":"BasicTicker"},{"attributes":{},"id":"cbd3d8e9-ee41-42f1-86df-4f3bc8d4cb9c","type":"LinearScale"},{"attributes":{},"id":"e3b49023-db55-48b3-9f92-a6d58042bcfe","type":"StringFormatter"},{"attributes":{},"id":"d8be4dd9-3e32-420c-b810-e63aa6cf0f01","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":{"id":"1ebef33e-f034-4eb8-8c34-05f164325160","type":"PointDrawTool"},"tools":[{"id":"1ebef33e-f034-4eb8-8c34-05f164325160","type":"PointDrawTool"}]},"id":"dd11a528-eea9-4d25-b9b9-95f6a779ff13","type":"Toolbar"}],"root_ids":["4deec3e7-5977-4dfa-830a-e486b035e767"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a2937a36-5a34-4e57-b1f4-0005e3771e6f","roots":{"4deec3e7-5977-4dfa-830a-e486b035e767":"7711d7d4-69e8-4266-a585-7ac9b410dcdf"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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