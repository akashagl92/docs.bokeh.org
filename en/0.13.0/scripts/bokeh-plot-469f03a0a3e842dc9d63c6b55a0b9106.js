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
      };var element = document.getElementById("3a783338-d492-49e4-aab8-a6e703fc57be");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3a783338-d492-49e4-aab8-a6e703fc57be' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ac0c0060-641c-4c48-856f-674c5180cbf2":{"roots":{"references":[{"attributes":{},"id":"5d17b8a2-c11a-4110-ae3b-f449c7f872f8","type":"LinearScale"},{"attributes":{},"id":"ebc880ae-8c70-4bd7-9b3b-e67ea8ee376a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"9c7eb0f5-50be-4481-a7e1-3f7cf6989f65","type":"DataRange1d"},{"attributes":{},"id":"c090bed7-a462-4497-a5c4-752443f051ff","type":"LinearScale"},{"attributes":{"callback":null},"id":"469dce5a-4c03-4341-a3b8-e39c7fdec253","type":"DataRange1d"},{"attributes":{"source":{"id":"08da49dd-838c-4459-8ebf-7a9cd4cbb65c","type":"ColumnDataSource"}},"id":"9d924479-eb48-4461-8544-c099b1d62382","type":"CDSView"},{"attributes":{"plot":{"id":"d843bc94-e883-4a5d-a266-addd5ff59fa5","subtype":"Figure","type":"Plot"},"ticker":{"id":"318465c8-fdf4-461d-a65b-ca2ef04a94f0","type":"BasicTicker"}},"id":"3682df2b-0c21-493d-9ae5-21efb638cf07","type":"Grid"},{"attributes":{"overlay":{"id":"b39cc069-ec19-4f88-b7b7-f63c2a54084e","type":"BoxAnnotation"}},"id":"88bb0826-8ac3-44a0-ad92-e9546b4690c7","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"d843bc94-e883-4a5d-a266-addd5ff59fa5","subtype":"Figure","type":"Plot"},"ticker":{"id":"b0342fe9-e333-454e-827b-49f57d329633","type":"BasicTicker"}},"id":"76f34487-81ab-4cc1-922c-d54fd7829feb","type":"Grid"},{"attributes":{},"id":"4bc0d598-1830-441c-a725-006854fa927f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4bc0d598-1830-441c-a725-006854fa927f","type":"BasicTickFormatter"},"plot":{"id":"d843bc94-e883-4a5d-a266-addd5ff59fa5","subtype":"Figure","type":"Plot"},"ticker":{"id":"318465c8-fdf4-461d-a65b-ca2ef04a94f0","type":"BasicTicker"}},"id":"b341e70c-7013-4d17-bf41-9dbb6912a42e","type":"LinearAxis"},{"attributes":{},"id":"318465c8-fdf4-461d-a65b-ca2ef04a94f0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ebc880ae-8c70-4bd7-9b3b-e67ea8ee376a","type":"BasicTickFormatter"},"plot":{"id":"d843bc94-e883-4a5d-a266-addd5ff59fa5","subtype":"Figure","type":"Plot"},"ticker":{"id":"b0342fe9-e333-454e-827b-49f57d329633","type":"BasicTicker"}},"id":"b85cf6d4-997d-412c-a397-4b5081989e96","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"e3daf240-b900-483a-bfc8-e5fbe012fa66","type":"Patch"},{"attributes":{},"id":"79e1d5d3-792a-4709-92b9-35ee03fe1a46","type":"PanTool"},{"attributes":{},"id":"e9017629-2fc8-4b0a-a4b4-4ff37d421c82","type":"HelpTool"},{"attributes":{},"id":"b0342fe9-e333-454e-827b-49f57d329633","type":"BasicTicker"},{"attributes":{"data_source":{"id":"08da49dd-838c-4459-8ebf-7a9cd4cbb65c","type":"ColumnDataSource"},"glyph":{"id":"5c9cfdbb-e5dc-4885-941a-b9b78f5683be","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e3daf240-b900-483a-bfc8-e5fbe012fa66","type":"Patch"},"selection_glyph":null,"view":{"id":"9d924479-eb48-4461-8544-c099b1d62382","type":"CDSView"}},"id":"8a96d949-6123-4041-93a8-f2332bf39d2a","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"233fbc92-aac9-4c50-9fc2-f4356a21b5b2","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b39cc069-ec19-4f88-b7b7-f63c2a54084e","type":"BoxAnnotation"},{"attributes":{},"id":"f67b8a2e-caaa-4f70-a179-2579a22b72d2","type":"WheelZoomTool"},{"attributes":{},"id":"3d07c359-1faa-4306-8cab-d967869be4dc","type":"SaveTool"},{"attributes":{},"id":"e4bcd667-a884-4987-b9d7-62beca851a35","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"2769788f-954d-4cc0-a08a-a187868f7a23","type":"Selection"},"selection_policy":{"id":"9bf83777-277a-4d7b-98c1-9e81fb3c2ee5","type":"UnionRenderers"}},"id":"08da49dd-838c-4459-8ebf-7a9cd4cbb65c","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"b341e70c-7013-4d17-bf41-9dbb6912a42e","type":"LinearAxis"}],"left":[{"id":"b85cf6d4-997d-412c-a397-4b5081989e96","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b341e70c-7013-4d17-bf41-9dbb6912a42e","type":"LinearAxis"},{"id":"3682df2b-0c21-493d-9ae5-21efb638cf07","type":"Grid"},{"id":"b85cf6d4-997d-412c-a397-4b5081989e96","type":"LinearAxis"},{"id":"76f34487-81ab-4cc1-922c-d54fd7829feb","type":"Grid"},{"id":"b39cc069-ec19-4f88-b7b7-f63c2a54084e","type":"BoxAnnotation"},{"id":"8a96d949-6123-4041-93a8-f2332bf39d2a","type":"GlyphRenderer"}],"title":{"id":"233fbc92-aac9-4c50-9fc2-f4356a21b5b2","type":"Title"},"toolbar":{"id":"16fa73a4-68c4-46eb-ab45-b5c1aff253f7","type":"Toolbar"},"x_range":{"id":"469dce5a-4c03-4341-a3b8-e39c7fdec253","type":"DataRange1d"},"x_scale":{"id":"5d17b8a2-c11a-4110-ae3b-f449c7f872f8","type":"LinearScale"},"y_range":{"id":"9c7eb0f5-50be-4481-a7e1-3f7cf6989f65","type":"DataRange1d"},"y_scale":{"id":"c090bed7-a462-4497-a5c4-752443f051ff","type":"LinearScale"}},"id":"d843bc94-e883-4a5d-a266-addd5ff59fa5","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"79e1d5d3-792a-4709-92b9-35ee03fe1a46","type":"PanTool"},{"id":"f67b8a2e-caaa-4f70-a179-2579a22b72d2","type":"WheelZoomTool"},{"id":"88bb0826-8ac3-44a0-ad92-e9546b4690c7","type":"BoxZoomTool"},{"id":"3d07c359-1faa-4306-8cab-d967869be4dc","type":"SaveTool"},{"id":"e4bcd667-a884-4987-b9d7-62beca851a35","type":"ResetTool"},{"id":"e9017629-2fc8-4b0a-a4b4-4ff37d421c82","type":"HelpTool"}]},"id":"16fa73a4-68c4-46eb-ab45-b5c1aff253f7","type":"Toolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"#1f77b4","line_alpha":0.5,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5c9cfdbb-e5dc-4885-941a-b9b78f5683be","type":"Patch"},{"attributes":{},"id":"2769788f-954d-4cc0-a08a-a187868f7a23","type":"Selection"},{"attributes":{},"id":"9bf83777-277a-4d7b-98c1-9e81fb3c2ee5","type":"UnionRenderers"}],"root_ids":["d843bc94-e883-4a5d-a266-addd5ff59fa5"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ac0c0060-641c-4c48-856f-674c5180cbf2","roots":{"d843bc94-e883-4a5d-a266-addd5ff59fa5":"3a783338-d492-49e4-aab8-a6e703fc57be"}}];
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