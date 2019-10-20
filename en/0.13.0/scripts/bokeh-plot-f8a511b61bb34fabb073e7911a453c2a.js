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
      };var element = document.getElementById("4c748484-6e90-413a-b8e4-26e286735fe2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c748484-6e90-413a-b8e4-26e286735fe2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ff2822d2-e79c-4351-99c3-beae7aa9a780":{"roots":{"references":[{"attributes":{"plot":null,"text":"Left Title"},"id":"7632358d-f428-4ae5-8869-b68023d32012","type":"Title"},{"attributes":{"formatter":{"id":"6a755268-d397-4336-8983-6cb8555268fa","type":"BasicTickFormatter"},"plot":{"id":"02cd9b9c-592c-47d5-a5e0-a28b1b68c254","subtype":"Figure","type":"Plot"},"ticker":{"id":"866ed01f-dbab-4b9a-950a-59157c239f43","type":"BasicTicker"}},"id":"350167b4-fab9-4ad5-92bb-ba17fa46c203","type":"LinearAxis"},{"attributes":{"callback":null},"id":"e459f024-128c-4684-aa5c-b3633ab9f691","type":"DataRange1d"},{"attributes":{},"id":"4032c6e1-4297-4935-86b7-97fa81e8c9ae","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3e3ed414-d959-496d-828a-7f15440abb1a","type":"PanTool"},{"id":"3a4e4fb6-20d1-44cb-9bd6-682596ee98e6","type":"WheelZoomTool"},{"id":"c0348205-5abe-4ed3-9a69-1b206fceb0cb","type":"BoxZoomTool"},{"id":"508432e3-912d-4423-8074-7e3005333f61","type":"SaveTool"},{"id":"6a470646-aa22-479f-b39d-f33bb100f208","type":"ResetTool"},{"id":"729c53c3-c113-450f-94a6-b23e824b45ea","type":"HelpTool"}]},"id":"68cfbc11-76d2-4cf7-9d74-6e7450b64652","type":"Toolbar"},{"attributes":{},"id":"508432e3-912d-4423-8074-7e3005333f61","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"852ca9ba-1e32-4694-b906-d438d0bfece5","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"02cd9b9c-592c-47d5-a5e0-a28b1b68c254","subtype":"Figure","type":"Plot"},"ticker":{"id":"866ed01f-dbab-4b9a-950a-59157c239f43","type":"BasicTicker"}},"id":"40405d95-b0d7-49c4-932b-f2961a756213","type":"Grid"},{"attributes":{},"id":"729c53c3-c113-450f-94a6-b23e824b45ea","type":"HelpTool"},{"attributes":{},"id":"d55e42d2-f5b4-4bf5-b02a-cf9f02a3dd10","type":"UnionRenderers"},{"attributes":{},"id":"04a1dbef-654e-4f72-8b0b-2e73a6d8de28","type":"LinearScale"},{"attributes":{"overlay":{"id":"3847aa00-cd40-42c5-bf6b-15f1675594f4","type":"BoxAnnotation"}},"id":"c0348205-5abe-4ed3-9a69-1b206fceb0cb","type":"BoxZoomTool"},{"attributes":{},"id":"6a755268-d397-4336-8983-6cb8555268fa","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"02cd9b9c-592c-47d5-a5e0-a28b1b68c254","subtype":"Figure","type":"Plot"},"ticker":{"id":"4032c6e1-4297-4935-86b7-97fa81e8c9ae","type":"BasicTicker"}},"id":"876a3454-f1ed-410a-9ba4-c613b351ae8c","type":"Grid"},{"attributes":{"align":"center","plot":{"id":"02cd9b9c-592c-47d5-a5e0-a28b1b68c254","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"912c0b2e-96ba-4f4d-87de-3b0440b8c223","type":"Title"},{"attributes":{"callback":null},"id":"b9bd2c79-eb87-4949-9163-cc0effa66774","type":"DataRange1d"},{"attributes":{"source":{"id":"776cb1f4-d461-48bb-9344-39c708cdfb85","type":"ColumnDataSource"}},"id":"63550b68-8969-4435-978a-6be7af251ed0","type":"CDSView"},{"attributes":{},"id":"3b5ee8d2-1cc1-4f82-990a-df625b0caa08","type":"LinearScale"},{"attributes":{},"id":"3e3ed414-d959-496d-828a-7f15440abb1a","type":"PanTool"},{"attributes":{},"id":"a2507786-7af8-4127-bbf6-ff15fc56148a","type":"Selection"},{"attributes":{},"id":"6a470646-aa22-479f-b39d-f33bb100f208","type":"ResetTool"},{"attributes":{"formatter":{"id":"b08f969a-3781-4a7b-bc22-dbdb704aacf2","type":"BasicTickFormatter"},"plot":{"id":"02cd9b9c-592c-47d5-a5e0-a28b1b68c254","subtype":"Figure","type":"Plot"},"ticker":{"id":"4032c6e1-4297-4935-86b7-97fa81e8c9ae","type":"BasicTicker"}},"id":"5904ff87-a5d4-4651-babb-b20898fb106e","type":"LinearAxis"},{"attributes":{},"id":"b08f969a-3781-4a7b-bc22-dbdb704aacf2","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3847aa00-cd40-42c5-bf6b-15f1675594f4","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10d778f2-62ad-4820-a5f0-3de9a8767995","type":"Circle"},{"attributes":{},"id":"3a4e4fb6-20d1-44cb-9bd6-682596ee98e6","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"776cb1f4-d461-48bb-9344-39c708cdfb85","type":"ColumnDataSource"},"glyph":{"id":"10d778f2-62ad-4820-a5f0-3de9a8767995","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"852ca9ba-1e32-4694-b906-d438d0bfece5","type":"Circle"},"selection_glyph":null,"view":{"id":"63550b68-8969-4435-978a-6be7af251ed0","type":"CDSView"}},"id":"38461c8f-be7b-47ff-b876-c52d83b7d881","type":"GlyphRenderer"},{"attributes":{},"id":"866ed01f-dbab-4b9a-950a-59157c239f43","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"a2507786-7af8-4127-bbf6-ff15fc56148a","type":"Selection"},"selection_policy":{"id":"d55e42d2-f5b4-4bf5-b02a-cf9f02a3dd10","type":"UnionRenderers"}},"id":"776cb1f4-d461-48bb-9344-39c708cdfb85","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"5904ff87-a5d4-4651-babb-b20898fb106e","type":"LinearAxis"},{"id":"912c0b2e-96ba-4f4d-87de-3b0440b8c223","type":"Title"}],"left":[{"id":"350167b4-fab9-4ad5-92bb-ba17fa46c203","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5904ff87-a5d4-4651-babb-b20898fb106e","type":"LinearAxis"},{"id":"876a3454-f1ed-410a-9ba4-c613b351ae8c","type":"Grid"},{"id":"350167b4-fab9-4ad5-92bb-ba17fa46c203","type":"LinearAxis"},{"id":"40405d95-b0d7-49c4-932b-f2961a756213","type":"Grid"},{"id":"3847aa00-cd40-42c5-bf6b-15f1675594f4","type":"BoxAnnotation"},{"id":"38461c8f-be7b-47ff-b876-c52d83b7d881","type":"GlyphRenderer"},{"id":"912c0b2e-96ba-4f4d-87de-3b0440b8c223","type":"Title"}],"title":{"id":"7632358d-f428-4ae5-8869-b68023d32012","type":"Title"},"title_location":"left","toolbar":{"id":"68cfbc11-76d2-4cf7-9d74-6e7450b64652","type":"Toolbar"},"x_range":{"id":"e459f024-128c-4684-aa5c-b3633ab9f691","type":"DataRange1d"},"x_scale":{"id":"04a1dbef-654e-4f72-8b0b-2e73a6d8de28","type":"LinearScale"},"y_range":{"id":"b9bd2c79-eb87-4949-9163-cc0effa66774","type":"DataRange1d"},"y_scale":{"id":"3b5ee8d2-1cc1-4f82-990a-df625b0caa08","type":"LinearScale"}},"id":"02cd9b9c-592c-47d5-a5e0-a28b1b68c254","subtype":"Figure","type":"Plot"}],"root_ids":["02cd9b9c-592c-47d5-a5e0-a28b1b68c254"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ff2822d2-e79c-4351-99c3-beae7aa9a780","roots":{"02cd9b9c-592c-47d5-a5e0-a28b1b68c254":"4c748484-6e90-413a-b8e4-26e286735fe2"}}];
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