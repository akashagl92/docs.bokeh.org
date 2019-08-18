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
      };var element = document.getElementById("e49915eb-d4bb-44e4-9371-30471e6056c5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e49915eb-d4bb-44e4-9371-30471e6056c5' but no matching script tag was found. ")
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
                var docs_json = {"501fcabb-27aa-45de-985a-1b5ac80f2b58":{"roots":{"references":[{"attributes":{"callback":null},"id":"d171e2cd-6427-4443-a76d-5a4fe0062709","type":"DataRange1d"},{"attributes":{"callback":null},"id":"75ff5213-a6df-4d01-856b-31ed3ef99558","type":"DataRange1d"},{"attributes":{},"id":"cade45d3-4239-4b21-939b-924c03f77e99","type":"LinearScale"},{"attributes":{},"id":"8689ab83-6ccd-4681-9699-da7832b08674","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"c48a3ab1-fce5-48ec-b7f0-432bda60b796","type":"LinearAxis"}],"left":[{"id":"160f5f34-22dd-41c6-a8c5-5c444722e446","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c48a3ab1-fce5-48ec-b7f0-432bda60b796","type":"LinearAxis"},{"id":"0537260c-d5d5-4ccd-90de-88bf30a91466","type":"Grid"},{"id":"160f5f34-22dd-41c6-a8c5-5c444722e446","type":"LinearAxis"},{"id":"755de1f2-f545-48f4-8f27-8921b20dcd77","type":"Grid"},{"id":"b96c869c-22e6-4270-9860-5ac0920ecb67","type":"BoxAnnotation"},{"id":"756991c7-0e62-4eab-aea2-168df94f2469","type":"BoxAnnotation"},{"id":"308fe479-20fe-42ac-93f3-602129118605","type":"PolyAnnotation"},{"id":"7398ad33-4dd7-495f-8d2a-64d9e3640c28","type":"GlyphRenderer"}],"title":{"id":"160b654d-9a40-43cd-997d-c20c93e20ae0","type":"Title"},"tool_events":{"id":"770d42a1-3c73-444b-9e4f-0f02d4ddbe47","type":"ToolEvents"},"toolbar":{"id":"1efd6a41-c2d1-4b2a-91e7-74b6c03531cc","type":"Toolbar"},"x_range":{"id":"75ff5213-a6df-4d01-856b-31ed3ef99558","type":"DataRange1d"},"x_scale":{"id":"cade45d3-4239-4b21-939b-924c03f77e99","type":"LinearScale"},"y_range":{"id":"d171e2cd-6427-4443-a76d-5a4fe0062709","type":"DataRange1d"},"y_scale":{"id":"9629fc03-812f-4ed3-aa07-35e6d7340577","type":"LinearScale"}},"id":"d7307d0b-dd1a-42f9-ae9c-bd609d425130","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9629fc03-812f-4ed3-aa07-35e6d7340577","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ec3306a7-af95-4382-bf98-d13eef9c021e","type":"BoxSelectTool"},{"id":"d2650f03-1f8d-4ed6-959b-f4b5b254b5c7","type":"BoxZoomTool"},{"id":"311c9cd6-f442-4ca9-b840-3c3758096489","type":"LassoSelectTool"},{"id":"8afbf043-ed04-4fdd-8b5e-86670ead3a72","type":"ResetTool"}]},"id":"1efd6a41-c2d1-4b2a-91e7-74b6c03531cc","type":"Toolbar"},{"attributes":{"plot":{"id":"d7307d0b-dd1a-42f9-ae9c-bd609d425130","subtype":"Figure","type":"Plot"},"ticker":{"id":"40d39fd4-f0d2-44c4-8fb5-d9ff6c67397b","type":"BasicTicker"}},"id":"0537260c-d5d5-4ccd-90de-88bf30a91466","type":"Grid"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"160b654d-9a40-43cd-997d-c20c93e20ae0","type":"Title"},{"attributes":{},"id":"ab55dc4f-8b9f-44bc-a9ee-f092ddc7de77","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"308fe479-20fe-42ac-93f3-602129118605","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"308fe479-20fe-42ac-93f3-602129118605","type":"PolyAnnotation"},"plot":{"id":"d7307d0b-dd1a-42f9-ae9c-bd609d425130","subtype":"Figure","type":"Plot"}},"id":"311c9cd6-f442-4ca9-b840-3c3758096489","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"84c0da39-2e34-416a-8f59-c87877def68a","type":"Circle"},{"attributes":{"overlay":{"id":"756991c7-0e62-4eab-aea2-168df94f2469","type":"BoxAnnotation"},"plot":{"id":"d7307d0b-dd1a-42f9-ae9c-bd609d425130","subtype":"Figure","type":"Plot"}},"id":"d2650f03-1f8d-4ed6-959b-f4b5b254b5c7","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}}},"id":"2f07ec8a-b0ed-4c79-a34d-64c08e647a29","type":"ColumnDataSource"},{"attributes":{},"id":"40d39fd4-f0d2-44c4-8fb5-d9ff6c67397b","type":"BasicTicker"},{"attributes":{"plot":{"id":"d7307d0b-dd1a-42f9-ae9c-bd609d425130","subtype":"Figure","type":"Plot"}},"id":"8afbf043-ed04-4fdd-8b5e-86670ead3a72","type":"ResetTool"},{"attributes":{},"id":"32fe2545-6a46-4939-8794-b0725a1df97d","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2f07ec8a-b0ed-4c79-a34d-64c08e647a29","type":"ColumnDataSource"},"glyph":{"id":"84c0da39-2e34-416a-8f59-c87877def68a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"140e9ce6-c98d-4c96-9ee7-11ac899a3204","type":"Circle"},"selection_glyph":null},"id":"7398ad33-4dd7-495f-8d2a-64d9e3640c28","type":"GlyphRenderer"},{"attributes":{},"id":"770d42a1-3c73-444b-9e4f-0f02d4ddbe47","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"140e9ce6-c98d-4c96-9ee7-11ac899a3204","type":"Circle"},{"attributes":{"formatter":{"id":"32fe2545-6a46-4939-8794-b0725a1df97d","type":"BasicTickFormatter"},"plot":{"id":"d7307d0b-dd1a-42f9-ae9c-bd609d425130","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab55dc4f-8b9f-44bc-a9ee-f092ddc7de77","type":"BasicTicker"}},"id":"160f5f34-22dd-41c6-a8c5-5c444722e446","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8689ab83-6ccd-4681-9699-da7832b08674","type":"BasicTickFormatter"},"plot":{"id":"d7307d0b-dd1a-42f9-ae9c-bd609d425130","subtype":"Figure","type":"Plot"},"ticker":{"id":"40d39fd4-f0d2-44c4-8fb5-d9ff6c67397b","type":"BasicTicker"}},"id":"c48a3ab1-fce5-48ec-b7f0-432bda60b796","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"d7307d0b-dd1a-42f9-ae9c-bd609d425130","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab55dc4f-8b9f-44bc-a9ee-f092ddc7de77","type":"BasicTicker"}},"id":"755de1f2-f545-48f4-8f27-8921b20dcd77","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"756991c7-0e62-4eab-aea2-168df94f2469","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b96c869c-22e6-4270-9860-5ac0920ecb67","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"b96c869c-22e6-4270-9860-5ac0920ecb67","type":"BoxAnnotation"},"plot":{"id":"d7307d0b-dd1a-42f9-ae9c-bd609d425130","subtype":"Figure","type":"Plot"},"renderers":[{"id":"7398ad33-4dd7-495f-8d2a-64d9e3640c28","type":"GlyphRenderer"}]},"id":"ec3306a7-af95-4382-bf98-d13eef9c021e","type":"BoxSelectTool"}],"root_ids":["d7307d0b-dd1a-42f9-ae9c-bd609d425130"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"501fcabb-27aa-45de-985a-1b5ac80f2b58","elementid":"e49915eb-d4bb-44e4-9371-30471e6056c5","modelid":"d7307d0b-dd1a-42f9-ae9c-bd609d425130"}];
                
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
