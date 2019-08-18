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
      };var element = document.getElementById("31a9f99e-8438-493e-8808-48c3c57415cc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '31a9f99e-8438-493e-8808-48c3c57415cc' but no matching script tag was found. ")
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
                    var docs_json = {"7daf3b4a-a28e-4dbf-abcf-04ffafe23f8b":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3096baae-7758-4189-b95d-2d1408bcc10c","type":"PanTool"},{"id":"d2ee5ec2-9e1b-4206-815e-5fd8db5673c6","type":"WheelZoomTool"},{"id":"969f1b7f-5676-4da9-83e5-ba0123c2ff8a","type":"BoxZoomTool"},{"id":"0c0c6430-4be2-4cd9-b742-8c23e5436ac1","type":"SaveTool"},{"id":"cf5499e8-3f18-4d58-bb17-2df2bc4a1177","type":"ResetTool"},{"id":"8a505ca1-0380-4012-bafb-fd969ee7d7c8","type":"HelpTool"}]},"id":"08bd8be6-c016-4643-9a5e-cc33af2332ef","type":"Toolbar"},{"attributes":{},"id":"83b10616-c4a0-40f2-a49c-9984526d6f12","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"c976263d-3d7d-4095-b9b2-e9179ccfc555","type":"Title"},{"attributes":{"overlay":{"id":"26f5fd5a-7493-46c2-806e-304d7a1d13c0","type":"BoxAnnotation"}},"id":"969f1b7f-5676-4da9-83e5-ba0123c2ff8a","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"35017324-b0ff-4079-ae41-7659721473d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c78c4aa-4af7-4e0f-b289-5aa366a455c6","type":"BasicTicker"}},"id":"d3fed625-8e57-4890-9ae8-f01ba4a7d9a6","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26f5fd5a-7493-46c2-806e-304d7a1d13c0","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"a29505e3-9db8-4574-bb45-922e01f2d106","type":"ColumnDataSource"},{"attributes":{},"id":"0c0c6430-4be2-4cd9-b742-8c23e5436ac1","type":"SaveTool"},{"attributes":{},"id":"8a505ca1-0380-4012-bafb-fd969ee7d7c8","type":"HelpTool"},{"attributes":{"source":{"id":"a29505e3-9db8-4574-bb45-922e01f2d106","type":"ColumnDataSource"}},"id":"3b7e1c3f-67cd-47d7-bbd3-cc0e19c5d781","type":"CDSView"},{"attributes":{"below":[{"id":"61ba84a3-2894-41fe-890c-fb826bcf3035","type":"LinearAxis"}],"left":[{"id":"1bb88f8d-6754-4eed-9064-111a70b204ef","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"61ba84a3-2894-41fe-890c-fb826bcf3035","type":"LinearAxis"},{"id":"142b1cf9-495a-40be-8cea-5344fc48f1e6","type":"Grid"},{"id":"1bb88f8d-6754-4eed-9064-111a70b204ef","type":"LinearAxis"},{"id":"d3fed625-8e57-4890-9ae8-f01ba4a7d9a6","type":"Grid"},{"id":"26f5fd5a-7493-46c2-806e-304d7a1d13c0","type":"BoxAnnotation"},{"id":"c2b600e8-04c3-45eb-92fe-bab965af6146","type":"GlyphRenderer"}],"title":{"id":"c976263d-3d7d-4095-b9b2-e9179ccfc555","type":"Title"},"toolbar":{"id":"08bd8be6-c016-4643-9a5e-cc33af2332ef","type":"Toolbar"},"x_range":{"id":"f98e3108-4fd5-4bf2-aa28-0b7e88dc39ef","type":"DataRange1d"},"x_scale":{"id":"b6826853-ea72-4116-9168-b7ac22cbe67c","type":"LinearScale"},"y_range":{"id":"1064905a-4d42-485d-a33d-4baf318f16fe","type":"DataRange1d"},"y_scale":{"id":"680410b1-2244-4545-b738-44f63eef683c","type":"LinearScale"}},"id":"35017324-b0ff-4079-ae41-7659721473d6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d2ee5ec2-9e1b-4206-815e-5fd8db5673c6","type":"WheelZoomTool"},{"attributes":{},"id":"cf5499e8-3f18-4d58-bb17-2df2bc4a1177","type":"ResetTool"},{"attributes":{},"id":"2c78c4aa-4af7-4e0f-b289-5aa366a455c6","type":"BasicTicker"},{"attributes":{"data_source":{"id":"a29505e3-9db8-4574-bb45-922e01f2d106","type":"ColumnDataSource"},"glyph":{"id":"cd7e5159-d5e1-459a-b6fd-971f0fb4aeaf","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"00808d82-fa88-4cfc-9e3d-a915d5eef345","type":"Triangle"},"selection_glyph":null,"view":{"id":"3b7e1c3f-67cd-47d7-bbd3-cc0e19c5d781","type":"CDSView"}},"id":"c2b600e8-04c3-45eb-92fe-bab965af6146","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"ecfd09e8-ee0d-4c00-a16d-71fefc8e86d7","type":"BasicTickFormatter"},"plot":{"id":"35017324-b0ff-4079-ae41-7659721473d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c78c4aa-4af7-4e0f-b289-5aa366a455c6","type":"BasicTicker"}},"id":"1bb88f8d-6754-4eed-9064-111a70b204ef","type":"LinearAxis"},{"attributes":{},"id":"3096baae-7758-4189-b95d-2d1408bcc10c","type":"PanTool"},{"attributes":{"plot":{"id":"35017324-b0ff-4079-ae41-7659721473d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d9620f8-44e7-45f9-b305-17ce1b7291a9","type":"BasicTicker"}},"id":"142b1cf9-495a-40be-8cea-5344fc48f1e6","type":"Grid"},{"attributes":{},"id":"680410b1-2244-4545-b738-44f63eef683c","type":"LinearScale"},{"attributes":{},"id":"ecfd09e8-ee0d-4c00-a16d-71fefc8e86d7","type":"BasicTickFormatter"},{"attributes":{},"id":"b6826853-ea72-4116-9168-b7ac22cbe67c","type":"LinearScale"},{"attributes":{"callback":null},"id":"1064905a-4d42-485d-a33d-4baf318f16fe","type":"DataRange1d"},{"attributes":{"formatter":{"id":"83b10616-c4a0-40f2-a49c-9984526d6f12","type":"BasicTickFormatter"},"plot":{"id":"35017324-b0ff-4079-ae41-7659721473d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d9620f8-44e7-45f9-b305-17ce1b7291a9","type":"BasicTicker"}},"id":"61ba84a3-2894-41fe-890c-fb826bcf3035","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd7e5159-d5e1-459a-b6fd-971f0fb4aeaf","type":"Triangle"},{"attributes":{},"id":"2d9620f8-44e7-45f9-b305-17ce1b7291a9","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f98e3108-4fd5-4bf2-aa28-0b7e88dc39ef","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"00808d82-fa88-4cfc-9e3d-a915d5eef345","type":"Triangle"}],"root_ids":["35017324-b0ff-4079-ae41-7659721473d6"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"7daf3b4a-a28e-4dbf-abcf-04ffafe23f8b","elementid":"31a9f99e-8438-493e-8808-48c3c57415cc","modelid":"35017324-b0ff-4079-ae41-7659721473d6"}];
                
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
