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
      };var element = document.getElementById("3c6bba45-9957-4c2d-8e41-66b79bc7a916");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3c6bba45-9957-4c2d-8e41-66b79bc7a916' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"b26bb570-b3e3-4316-8283-167ab9adb083":{"roots":{"references":[{"attributes":{"formatter":{"id":"575e5590-14ef-437c-8180-f41bf872812e","type":"BasicTickFormatter"},"plot":{"id":"74518378-5935-4083-a2c8-26cf3f33f0cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb6eabf6-557a-4033-ade4-c009e43b3c52","type":"BasicTicker"}},"id":"02720236-df33-4ca7-98dd-cd0b1f8c4964","type":"LinearAxis"},{"attributes":{},"id":"bb6eabf6-557a-4033-ade4-c009e43b3c52","type":"BasicTicker"},{"attributes":{},"id":"76a4f359-5a1f-4cc9-ae8b-3355bea83f2a","type":"LogScale"},{"attributes":{"dimension":1,"plot":{"id":"74518378-5935-4083-a2c8-26cf3f33f0cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"51cc82d0-0be1-47ab-b039-727578c28129","type":"LogTicker"}},"id":"69f92285-b3af-4876-9592-7e38728bc1cd","type":"Grid"},{"attributes":{"overlay":{"id":"71bf7f5a-1fd5-4dc9-b8fa-d084fb3c9f31","type":"BoxAnnotation"}},"id":"5f4ed724-a2d2-44b7-813c-9992d9fb3c60","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7368f2d2-444b-459a-bd49-058c37ccd60f","type":"Line"},{"attributes":{},"id":"5e9db4c3-43e8-4497-aa17-321635752d2d","type":"PanTool"},{"attributes":{},"id":"514791e9-e50a-4406-9620-eee96061ce04","type":"WheelZoomTool"},{"attributes":{"source":{"id":"a3385813-663b-4d5f-ac8c-89b928957c12","type":"ColumnDataSource"}},"id":"bd8e3ad0-533d-49d1-a147-81e1448811c0","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"71bf7f5a-1fd5-4dc9-b8fa-d084fb3c9f31","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"a3385813-663b-4d5f-ac8c-89b928957c12","type":"ColumnDataSource"},{"attributes":{},"id":"b06413dd-1f99-4971-a1e1-3434bbbd4c16","type":"SaveTool"},{"attributes":{},"id":"e51ca2b9-b0a3-4bd5-afd8-4f04414366ab","type":"ResetTool"},{"attributes":{},"id":"1b70da2b-4d93-4707-8c66-e8a8f1443960","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"716194a7-e140-46a3-9098-58f257a9e818","type":"ColumnDataSource"},{"attributes":{"source":{"id":"716194a7-e140-46a3-9098-58f257a9e818","type":"ColumnDataSource"}},"id":"8a3b98cf-de5e-4de5-84ab-0bc400014e03","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"b458fcfd-11e9-4621-a8e1-9656f94591a0","type":"Title"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"d36a1699-8201-45fc-a7b9-b2e3efcf5232","type":"Circle"},{"attributes":{},"id":"575e5590-14ef-437c-8180-f41bf872812e","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"02720236-df33-4ca7-98dd-cd0b1f8c4964","type":"LinearAxis"}],"left":[{"id":"e3e19108-49d4-473f-9281-e5e873aad9a6","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"02720236-df33-4ca7-98dd-cd0b1f8c4964","type":"LinearAxis"},{"id":"eeb84d51-a8f3-40b6-a955-a3c38a32db20","type":"Grid"},{"id":"e3e19108-49d4-473f-9281-e5e873aad9a6","type":"LogAxis"},{"id":"69f92285-b3af-4876-9592-7e38728bc1cd","type":"Grid"},{"id":"71bf7f5a-1fd5-4dc9-b8fa-d084fb3c9f31","type":"BoxAnnotation"},{"id":"0f92d3e2-d61a-4db4-86e5-59a27309b1d3","type":"GlyphRenderer"},{"id":"41917a6b-1444-4d65-9aca-615caaa80510","type":"GlyphRenderer"}],"title":{"id":"b458fcfd-11e9-4621-a8e1-9656f94591a0","type":"Title"},"toolbar":{"id":"f3d9ecd8-5bcd-4c59-a4a0-1d72a09538fa","type":"Toolbar"},"x_range":{"id":"87de548e-62e4-4e3a-a9ce-5a38e270bf0c","type":"DataRange1d"},"x_scale":{"id":"8391804b-80bc-4445-b09e-6ad123752197","type":"LinearScale"},"y_range":{"id":"9613143a-4dde-46fc-a990-12ffba204ed8","type":"DataRange1d"},"y_scale":{"id":"76a4f359-5a1f-4cc9-ae8b-3355bea83f2a","type":"LogScale"}},"id":"74518378-5935-4083-a2c8-26cf3f33f0cb","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"716194a7-e140-46a3-9098-58f257a9e818","type":"ColumnDataSource"},"glyph":{"id":"d36a1699-8201-45fc-a7b9-b2e3efcf5232","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0c7082b2-8e2f-48fe-a976-138917f05331","type":"Circle"},"selection_glyph":null,"view":{"id":"8a3b98cf-de5e-4de5-84ab-0bc400014e03","type":"CDSView"}},"id":"41917a6b-1444-4d65-9aca-615caaa80510","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a3385813-663b-4d5f-ac8c-89b928957c12","type":"ColumnDataSource"},"glyph":{"id":"8373d13b-875f-4fa8-b26c-f8c2d88c8f90","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7368f2d2-444b-459a-bd49-058c37ccd60f","type":"Line"},"selection_glyph":null,"view":{"id":"bd8e3ad0-533d-49d1-a147-81e1448811c0","type":"CDSView"}},"id":"0f92d3e2-d61a-4db4-86e5-59a27309b1d3","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5e9db4c3-43e8-4497-aa17-321635752d2d","type":"PanTool"},{"id":"514791e9-e50a-4406-9620-eee96061ce04","type":"WheelZoomTool"},{"id":"5f4ed724-a2d2-44b7-813c-9992d9fb3c60","type":"BoxZoomTool"},{"id":"b06413dd-1f99-4971-a1e1-3434bbbd4c16","type":"SaveTool"},{"id":"e51ca2b9-b0a3-4bd5-afd8-4f04414366ab","type":"ResetTool"},{"id":"1b70da2b-4d93-4707-8c66-e8a8f1443960","type":"HelpTool"}]},"id":"f3d9ecd8-5bcd-4c59-a4a0-1d72a09538fa","type":"Toolbar"},{"attributes":{"formatter":{"id":"6113e810-7c73-4315-8ac1-735c3225a833","type":"LogTickFormatter"},"plot":{"id":"74518378-5935-4083-a2c8-26cf3f33f0cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"51cc82d0-0be1-47ab-b039-727578c28129","type":"LogTicker"}},"id":"e3e19108-49d4-473f-9281-e5e873aad9a6","type":"LogAxis"},{"attributes":{"ticker":null},"id":"6113e810-7c73-4315-8ac1-735c3225a833","type":"LogTickFormatter"},{"attributes":{"callback":null},"id":"87de548e-62e4-4e3a-a9ce-5a38e270bf0c","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c7082b2-8e2f-48fe-a976-138917f05331","type":"Circle"},{"attributes":{"num_minor_ticks":10},"id":"51cc82d0-0be1-47ab-b039-727578c28129","type":"LogTicker"},{"attributes":{"callback":null},"id":"9613143a-4dde-46fc-a990-12ffba204ed8","type":"DataRange1d"},{"attributes":{},"id":"8391804b-80bc-4445-b09e-6ad123752197","type":"LinearScale"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"8373d13b-875f-4fa8-b26c-f8c2d88c8f90","type":"Line"},{"attributes":{"plot":{"id":"74518378-5935-4083-a2c8-26cf3f33f0cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb6eabf6-557a-4033-ade4-c009e43b3c52","type":"BasicTicker"}},"id":"eeb84d51-a8f3-40b6-a955-a3c38a32db20","type":"Grid"}],"root_ids":["74518378-5935-4083-a2c8-26cf3f33f0cb"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"b26bb570-b3e3-4316-8283-167ab9adb083","elementid":"3c6bba45-9957-4c2d-8e41-66b79bc7a916","modelid":"74518378-5935-4083-a2c8-26cf3f33f0cb"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
