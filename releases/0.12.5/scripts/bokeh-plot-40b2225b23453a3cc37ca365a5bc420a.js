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
      };var element = document.getElementById("9a06a200-9d50-4c7b-a0ac-b2dfd4c84b58");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9a06a200-9d50-4c7b-a0ac-b2dfd4c84b58' but no matching script tag was found. ")
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
                var docs_json = {"1148a146-4ba2-41b3-a881-c7cfa08b9204":{"roots":{"references":[{"attributes":{},"id":"9f630aab-f00a-4557-b7e2-83a10a19b433","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"3bdd9cbd-097f-4e18-844b-6211703bc9d5","type":"LinearAxis"}],"left":[{"id":"3aa79a89-e144-47db-b14b-462c6da4502b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3bdd9cbd-097f-4e18-844b-6211703bc9d5","type":"LinearAxis"},{"id":"756b6fd1-ecba-492c-81fd-507df2224b34","type":"Grid"},{"id":"3aa79a89-e144-47db-b14b-462c6da4502b","type":"LinearAxis"},{"id":"98a14d04-05bd-4c30-aa12-8df6fe143a97","type":"Grid"},{"id":"7c0f1f14-78bd-4f4b-a0af-cc2fb728e6bf","type":"GlyphRenderer"}],"title":{"id":"d4b64197-ea43-4d02-932f-3ec8ba40850e","type":"Title"},"tool_events":{"id":"5e309314-4f0e-41bd-b19f-541624b2bac3","type":"ToolEvents"},"toolbar":{"id":"c7e25597-7da1-4064-88f3-2c193098dd16","type":"Toolbar"},"x_range":{"id":"ba561626-23fc-409e-9422-1b881ca5cf27","type":"DataRange1d"},"y_range":{"id":"4eaebeaf-e86c-40fb-affa-57378067c498","type":"DataRange1d"}},"id":"96467bbb-55ad-4c5f-9da6-b2b8b1ee1de3","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"d9fa08cb-f047-44b9-9ac2-bc8f59b7928e","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"d4b64197-ea43-4d02-932f-3ec8ba40850e","type":"Title"},{"attributes":{"plot":{"id":"96467bbb-55ad-4c5f-9da6-b2b8b1ee1de3","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ceda09b-08c0-4adb-a0cd-fbbf08c46622","type":"BasicTicker"}},"id":"756b6fd1-ecba-492c-81fd-507df2224b34","type":"Grid"},{"attributes":{"formatter":{"id":"9f630aab-f00a-4557-b7e2-83a10a19b433","type":"BasicTickFormatter"},"plot":{"id":"96467bbb-55ad-4c5f-9da6-b2b8b1ee1de3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1985d40-f42f-4fc4-95bc-4108a9a075ca","type":"BasicTicker"}},"id":"3aa79a89-e144-47db-b14b-462c6da4502b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ebe12336-555c-4570-b2a3-596b925300ce","type":"BasicTickFormatter"},"plot":{"id":"96467bbb-55ad-4c5f-9da6-b2b8b1ee1de3","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ceda09b-08c0-4adb-a0cd-fbbf08c46622","type":"BasicTicker"}},"id":"3bdd9cbd-097f-4e18-844b-6211703bc9d5","type":"LinearAxis"},{"attributes":{"callback":null,"plot":{"id":"96467bbb-55ad-4c5f-9da6-b2b8b1ee1de3","subtype":"Figure","type":"Plot"}},"id":"f35730a9-6642-47c1-b5c8-392f4e7d1d7c","type":"TapTool"},{"attributes":{"dimension":1,"plot":{"id":"96467bbb-55ad-4c5f-9da6-b2b8b1ee1de3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1985d40-f42f-4fc4-95bc-4108a9a075ca","type":"BasicTicker"}},"id":"98a14d04-05bd-4c30-aa12-8df6fe143a97","type":"Grid"},{"attributes":{"data_source":{"id":"d9fa08cb-f047-44b9-9ac2-bc8f59b7928e","type":"ColumnDataSource"},"glyph":{"id":"33864930-4a50-45ce-a029-ade5373e5a23","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"228671ed-e585-419b-83bd-9018edb753f4","type":"Circle"},"selection_glyph":{"id":"b3770d98-6906-407f-affd-1c8594ee2133","type":"Circle"}},"id":"7c0f1f14-78bd-4f4b-a0af-cc2fb728e6bf","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"33864930-4a50-45ce-a029-ade5373e5a23","type":"Circle"},{"attributes":{},"id":"1ceda09b-08c0-4adb-a0cd-fbbf08c46622","type":"BasicTicker"},{"attributes":{},"id":"ebe12336-555c-4570-b2a3-596b925300ce","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"228671ed-e585-419b-83bd-9018edb753f4","type":"Circle"},{"attributes":{},"id":"5e309314-4f0e-41bd-b19f-541624b2bac3","type":"ToolEvents"},{"attributes":{},"id":"f1985d40-f42f-4fc4-95bc-4108a9a075ca","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"b3770d98-6906-407f-affd-1c8594ee2133","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f35730a9-6642-47c1-b5c8-392f4e7d1d7c","type":"TapTool"}]},"id":"c7e25597-7da1-4064-88f3-2c193098dd16","type":"Toolbar"},{"attributes":{"callback":null},"id":"ba561626-23fc-409e-9422-1b881ca5cf27","type":"DataRange1d"},{"attributes":{"callback":null},"id":"4eaebeaf-e86c-40fb-affa-57378067c498","type":"DataRange1d"}],"root_ids":["96467bbb-55ad-4c5f-9da6-b2b8b1ee1de3"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"1148a146-4ba2-41b3-a881-c7cfa08b9204","elementid":"9a06a200-9d50-4c7b-a0ac-b2dfd4c84b58","modelid":"96467bbb-55ad-4c5f-9da6-b2b8b1ee1de3"}];
                
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
