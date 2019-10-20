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
      };var element = document.getElementById("2337faaf-28c4-439e-bae8-06bb0d425483");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2337faaf-28c4-439e-bae8-06bb0d425483' but no matching script tag was found. ")
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
                var docs_json = {"acf08b3b-f5d7-4768-b343-d5fb09e0e193":{"roots":{"references":[{"attributes":{},"id":"f396cbac-3e69-4ab6-a00f-8cfbca629745","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"84e9ee1f-3070-4880-9085-77b264956450","type":"BasicTickFormatter"},"plot":{"id":"6d27eb34-1738-43f2-a5c1-1d4897f41fb5","subtype":"Figure","type":"Plot"},"ticker":{"id":"406cc290-673c-47dd-87ef-8f4d8f0c5ac1","type":"BasicTicker"}},"id":"79a65362-8045-4581-bb66-4cdf995e3f33","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ec444bd4-fc07-45ce-a5e3-91371ed9209b","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4d255fb6-5a61-440b-9ffe-486f726ab57f","type":"TapTool"}]},"id":"3b9d15a9-a8e5-40b2-b326-f7e52a07bc9d","type":"Toolbar"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"25b0ecd2-03da-47f0-b835-610951737274","type":"Title"},{"attributes":{"data_source":{"id":"e0b8346d-5fb6-4afd-a924-fb1d580403bf","type":"ColumnDataSource"},"glyph":{"id":"b5f7008e-7a56-474a-8c65-dea882afae20","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"c5996fd2-e5df-4d8e-966b-db678132de47","type":"Circle"},"selection_glyph":{"id":"5e64a9b4-9cfc-4c14-bdf8-cdde11440e40","type":"Circle"}},"id":"b08ad6e6-8ea5-4dc9-a089-530a7b5291a1","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"0a369a64-a16f-4316-8dfc-5e27db5ea1d8","type":"DataRange1d"},{"attributes":{},"id":"84e9ee1f-3070-4880-9085-77b264956450","type":"BasicTickFormatter"},{"attributes":{},"id":"406cc290-673c-47dd-87ef-8f4d8f0c5ac1","type":"BasicTicker"},{"attributes":{},"id":"06cb5eba-85cc-4f97-ac30-bc7961e70f7b","type":"ToolEvents"},{"attributes":{"callback":null,"plot":{"id":"6d27eb34-1738-43f2-a5c1-1d4897f41fb5","subtype":"Figure","type":"Plot"}},"id":"4d255fb6-5a61-440b-9ffe-486f726ab57f","type":"TapTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e64a9b4-9cfc-4c14-bdf8-cdde11440e40","type":"Circle"},{"attributes":{"formatter":{"id":"f396cbac-3e69-4ab6-a00f-8cfbca629745","type":"BasicTickFormatter"},"plot":{"id":"6d27eb34-1738-43f2-a5c1-1d4897f41fb5","subtype":"Figure","type":"Plot"},"ticker":{"id":"140b645b-dc11-4277-a4af-ce24fba2db38","type":"BasicTicker"}},"id":"b75e4ad5-8a91-4211-915a-a817afe94e1c","type":"LinearAxis"},{"attributes":{},"id":"140b645b-dc11-4277-a4af-ce24fba2db38","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5996fd2-e5df-4d8e-966b-db678132de47","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"e0b8346d-5fb6-4afd-a924-fb1d580403bf","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"6d27eb34-1738-43f2-a5c1-1d4897f41fb5","subtype":"Figure","type":"Plot"},"ticker":{"id":"406cc290-673c-47dd-87ef-8f4d8f0c5ac1","type":"BasicTicker"}},"id":"5070974f-f01d-4db8-baf8-e9e184e90f3d","type":"Grid"},{"attributes":{"below":[{"id":"b75e4ad5-8a91-4211-915a-a817afe94e1c","type":"LinearAxis"}],"left":[{"id":"79a65362-8045-4581-bb66-4cdf995e3f33","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b75e4ad5-8a91-4211-915a-a817afe94e1c","type":"LinearAxis"},{"id":"fa7fc725-1fe1-4f3e-9b37-7f062b9d588c","type":"Grid"},{"id":"79a65362-8045-4581-bb66-4cdf995e3f33","type":"LinearAxis"},{"id":"5070974f-f01d-4db8-baf8-e9e184e90f3d","type":"Grid"},{"id":"b08ad6e6-8ea5-4dc9-a089-530a7b5291a1","type":"GlyphRenderer"}],"title":{"id":"25b0ecd2-03da-47f0-b835-610951737274","type":"Title"},"tool_events":{"id":"06cb5eba-85cc-4f97-ac30-bc7961e70f7b","type":"ToolEvents"},"toolbar":{"id":"3b9d15a9-a8e5-40b2-b326-f7e52a07bc9d","type":"Toolbar"},"x_range":{"id":"ec444bd4-fc07-45ce-a5e3-91371ed9209b","type":"DataRange1d"},"y_range":{"id":"0a369a64-a16f-4316-8dfc-5e27db5ea1d8","type":"DataRange1d"}},"id":"6d27eb34-1738-43f2-a5c1-1d4897f41fb5","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"6d27eb34-1738-43f2-a5c1-1d4897f41fb5","subtype":"Figure","type":"Plot"},"ticker":{"id":"140b645b-dc11-4277-a4af-ce24fba2db38","type":"BasicTicker"}},"id":"fa7fc725-1fe1-4f3e-9b37-7f062b9d588c","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5f7008e-7a56-474a-8c65-dea882afae20","type":"Circle"}],"root_ids":["6d27eb34-1738-43f2-a5c1-1d4897f41fb5"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"acf08b3b-f5d7-4768-b343-d5fb09e0e193","elementid":"2337faaf-28c4-439e-bae8-06bb0d425483","modelid":"6d27eb34-1738-43f2-a5c1-1d4897f41fb5"}];
                
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
