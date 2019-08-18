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
      };var element = document.getElementById("1ead182b-c103-4989-8245-e48a6160a9db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1ead182b-c103-4989-8245-e48a6160a9db' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5fffb1e8-4626-456f-923f-648cf6723ea2":{"roots":{"references":[{"attributes":{"ticker":null},"id":"9c2c179d-88dc-40d2-a351-1bd1a8a0d67c","type":"LogTickFormatter"},{"attributes":{"data_source":{"id":"cd9d3553-949b-4dae-a24c-8cbcbfccdb25","type":"ColumnDataSource"},"glyph":{"id":"9fec75a3-d934-493d-a69a-ce614ae57a45","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aa5c1d0f-ca90-4921-87e9-013499f13f9d","type":"Circle"},"selection_glyph":null,"view":{"id":"e09194eb-9afe-4874-be05-6bf9762b9ae0","type":"CDSView"}},"id":"1fcea772-d72b-42b4-9f9f-a487547349f0","type":"GlyphRenderer"},{"attributes":{},"id":"ff8ff16b-b808-442a-b85d-5b8c2e8cb32d","type":"Selection"},{"attributes":{"source":{"id":"cd9d3553-949b-4dae-a24c-8cbcbfccdb25","type":"ColumnDataSource"}},"id":"e09194eb-9afe-4874-be05-6bf9762b9ae0","type":"CDSView"},{"attributes":{},"id":"de5bb352-05aa-473d-ad06-047b4ff869cb","type":"UnionRenderers"},{"attributes":{},"id":"aed24b08-adbc-4c86-8065-307c710854b8","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a481d3f3-931e-4253-8b00-812b5f1c762b","type":"LinearAxis"}],"left":[{"id":"7935c9c4-2b53-4d05-80dc-d67263d24765","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a481d3f3-931e-4253-8b00-812b5f1c762b","type":"LinearAxis"},{"id":"51462659-8f0f-42e6-8e39-f16fcb0fc896","type":"Grid"},{"id":"7935c9c4-2b53-4d05-80dc-d67263d24765","type":"LogAxis"},{"id":"b256e4e0-39b4-4bd3-aa78-44ebdf2d30f1","type":"Grid"},{"id":"f1d2da1d-9d59-4ecb-a284-700418b3793a","type":"BoxAnnotation"},{"id":"46f1795e-ed6a-4d8f-a931-e1e960c251f5","type":"GlyphRenderer"},{"id":"1fcea772-d72b-42b4-9f9f-a487547349f0","type":"GlyphRenderer"}],"title":{"id":"1eb79ed9-614e-4ff6-ae48-ecd5cab34d43","type":"Title"},"toolbar":{"id":"e2240777-115f-4a5e-819d-adfc5093d085","type":"Toolbar"},"x_range":{"id":"72a54532-00a5-426f-9edc-9a5950292c5c","type":"DataRange1d"},"x_scale":{"id":"a2d036ab-37df-4762-b8f9-e13534fac487","type":"LinearScale"},"y_range":{"id":"06d71052-c485-468a-9c5d-9642bba741cf","type":"DataRange1d"},"y_scale":{"id":"0c5dc48b-9971-4b3c-bcd8-2e51bd2f7de3","type":"LogScale"}},"id":"77d13a6b-9d2f-43cd-b0c9-0a755ac07526","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"13f5f495-666a-410a-a1e2-694d0672d4e8","type":"ColumnDataSource"},"glyph":{"id":"5a1b2c51-955a-4517-872d-5da77d7271ca","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bae3aeee-378a-4dbd-b3b2-b1796c320a41","type":"Line"},"selection_glyph":null,"view":{"id":"63191f74-89e3-4880-abe7-5fb465b65743","type":"CDSView"}},"id":"46f1795e-ed6a-4d8f-a931-e1e960c251f5","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"264bb7de-e5c2-453b-8f8e-621fcd3816d5","type":"PanTool"},{"id":"04be8f5a-c18f-4f13-af39-e1e21fbbcb0d","type":"WheelZoomTool"},{"id":"f22e0d9b-c17d-4155-a215-110e8bc271b1","type":"BoxZoomTool"},{"id":"52bf9775-2f2c-49d2-bcca-94f82c3e6f7a","type":"SaveTool"},{"id":"5e9dae2e-07b9-43cc-97e2-5550300eab10","type":"ResetTool"},{"id":"c729101b-f5cd-4629-a19e-b91d24069f92","type":"HelpTool"}]},"id":"e2240777-115f-4a5e-819d-adfc5093d085","type":"Toolbar"},{"attributes":{"num_minor_ticks":10},"id":"dca678ad-e476-4d28-8fef-20e87529f8c1","type":"LogTicker"},{"attributes":{"callback":null},"id":"72a54532-00a5-426f-9edc-9a5950292c5c","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5a1b2c51-955a-4517-872d-5da77d7271ca","type":"Line"},{"attributes":{"callback":null},"id":"06d71052-c485-468a-9c5d-9642bba741cf","type":"DataRange1d"},{"attributes":{},"id":"a2d036ab-37df-4762-b8f9-e13534fac487","type":"LinearScale"},{"attributes":{},"id":"0c5dc48b-9971-4b3c-bcd8-2e51bd2f7de3","type":"LogScale"},{"attributes":{"plot":{"id":"77d13a6b-9d2f-43cd-b0c9-0a755ac07526","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2be6285-f11b-44bd-9d08-b09fda282fb6","type":"BasicTicker"}},"id":"51462659-8f0f-42e6-8e39-f16fcb0fc896","type":"Grid"},{"attributes":{"formatter":{"id":"aed24b08-adbc-4c86-8065-307c710854b8","type":"BasicTickFormatter"},"plot":{"id":"77d13a6b-9d2f-43cd-b0c9-0a755ac07526","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2be6285-f11b-44bd-9d08-b09fda282fb6","type":"BasicTicker"}},"id":"a481d3f3-931e-4253-8b00-812b5f1c762b","type":"LinearAxis"},{"attributes":{},"id":"b2be6285-f11b-44bd-9d08-b09fda282fb6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9c2c179d-88dc-40d2-a351-1bd1a8a0d67c","type":"LogTickFormatter"},"plot":{"id":"77d13a6b-9d2f-43cd-b0c9-0a755ac07526","subtype":"Figure","type":"Plot"},"ticker":{"id":"dca678ad-e476-4d28-8fef-20e87529f8c1","type":"LogTicker"}},"id":"7935c9c4-2b53-4d05-80dc-d67263d24765","type":"LogAxis"},{"attributes":{"dimension":1,"plot":{"id":"77d13a6b-9d2f-43cd-b0c9-0a755ac07526","subtype":"Figure","type":"Plot"},"ticker":{"id":"dca678ad-e476-4d28-8fef-20e87529f8c1","type":"LogTicker"}},"id":"b256e4e0-39b4-4bd3-aa78-44ebdf2d30f1","type":"Grid"},{"attributes":{"overlay":{"id":"f1d2da1d-9d59-4ecb-a284-700418b3793a","type":"BoxAnnotation"}},"id":"f22e0d9b-c17d-4155-a215-110e8bc271b1","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"bae3aeee-378a-4dbd-b3b2-b1796c320a41","type":"Line"},{"attributes":{},"id":"264bb7de-e5c2-453b-8f8e-621fcd3816d5","type":"PanTool"},{"attributes":{},"id":"a4a54fd8-7dfc-42fc-a020-6653a60ce41a","type":"Selection"},{"attributes":{},"id":"04be8f5a-c18f-4f13-af39-e1e21fbbcb0d","type":"WheelZoomTool"},{"attributes":{"source":{"id":"13f5f495-666a-410a-a1e2-694d0672d4e8","type":"ColumnDataSource"}},"id":"63191f74-89e3-4880-abe7-5fb465b65743","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"1eb79ed9-614e-4ff6-ae48-ecd5cab34d43","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f1d2da1d-9d59-4ecb-a284-700418b3793a","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"a4a54fd8-7dfc-42fc-a020-6653a60ce41a","type":"Selection"},"selection_policy":{"id":"de5bb352-05aa-473d-ad06-047b4ff869cb","type":"UnionRenderers"}},"id":"13f5f495-666a-410a-a1e2-694d0672d4e8","type":"ColumnDataSource"},{"attributes":{},"id":"52bf9775-2f2c-49d2-bcca-94f82c3e6f7a","type":"SaveTool"},{"attributes":{},"id":"5e9dae2e-07b9-43cc-97e2-5550300eab10","type":"ResetTool"},{"attributes":{},"id":"341d3988-34b7-4b48-a1df-88fb0007ef20","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa5c1d0f-ca90-4921-87e9-013499f13f9d","type":"Circle"},{"attributes":{},"id":"c729101b-f5cd-4629-a19e-b91d24069f92","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"ff8ff16b-b808-442a-b85d-5b8c2e8cb32d","type":"Selection"},"selection_policy":{"id":"341d3988-34b7-4b48-a1df-88fb0007ef20","type":"UnionRenderers"}},"id":"cd9d3553-949b-4dae-a24c-8cbcbfccdb25","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"9fec75a3-d934-493d-a69a-ce614ae57a45","type":"Circle"}],"root_ids":["77d13a6b-9d2f-43cd-b0c9-0a755ac07526"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5fffb1e8-4626-456f-923f-648cf6723ea2","roots":{"77d13a6b-9d2f-43cd-b0c9-0a755ac07526":"1ead182b-c103-4989-8245-e48a6160a9db"}}];
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