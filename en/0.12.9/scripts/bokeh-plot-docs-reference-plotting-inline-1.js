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
      };var element = document.getElementById("65c6c8f8-4e4e-4887-9ab2-525a1accf51f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '65c6c8f8-4e4e-4887-9ab2-525a1accf51f' but no matching script tag was found. ")
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
                    var docs_json = {"6727195b-07fd-4d36-b13c-711213d27e9f":{"roots":{"references":[{"attributes":{},"id":"e4fe58fa-a56a-4761-8825-23c2b876f724","type":"SaveTool"},{"attributes":{},"id":"0d90713b-1189-4cc8-a40d-863c33960eea","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0d90713b-1189-4cc8-a40d-863c33960eea","type":"BasicTickFormatter"},"plot":{"id":"02aeda9f-056f-4cba-a081-efaf0a0b0589","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ecb7b3e-66ba-4893-8504-d653659c3137","type":"BasicTicker"}},"id":"7b89931c-1b6f-49d3-8bf3-9979f8d7e3f8","type":"LinearAxis"},{"attributes":{},"id":"e599c88d-4035-4016-aa98-c52cedeccda1","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d1f46131-ce3b-4dc0-a092-f0d2c836660a","type":"Asterisk"},{"attributes":{"source":{"id":"6aa0e56f-4999-440b-85c7-228af4ae43ea","type":"ColumnDataSource"}},"id":"1df0618f-cf9d-4e04-9b0d-3a7f8d54824c","type":"CDSView"},{"attributes":{"below":[{"id":"b9d8fb36-ca5f-46e1-8165-6036ea2930ed","type":"LinearAxis"}],"left":[{"id":"7b89931c-1b6f-49d3-8bf3-9979f8d7e3f8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b9d8fb36-ca5f-46e1-8165-6036ea2930ed","type":"LinearAxis"},{"id":"b196b0e0-1e7c-4a74-8ea1-e9b6a0e24c44","type":"Grid"},{"id":"7b89931c-1b6f-49d3-8bf3-9979f8d7e3f8","type":"LinearAxis"},{"id":"dac89bdf-50b4-469a-bc08-618341824d11","type":"Grid"},{"id":"286d1ee8-3c9b-4014-8406-b8d020d20632","type":"BoxAnnotation"},{"id":"864edb25-087f-4c92-9d17-d67aa197f6ef","type":"GlyphRenderer"}],"title":{"id":"b7d1f870-f243-41b8-87e8-a29a04c12d59","type":"Title"},"toolbar":{"id":"5f2b38c6-339f-477e-8f73-62594fd73fd0","type":"Toolbar"},"x_range":{"id":"213a6544-ab7b-41f4-bb99-8b49838a1552","type":"DataRange1d"},"x_scale":{"id":"a33ff909-f196-4271-9ac1-147c9d47fb45","type":"LinearScale"},"y_range":{"id":"10f605ac-be49-4ef2-9560-2db1f9576abe","type":"DataRange1d"},"y_scale":{"id":"e599c88d-4035-4016-aa98-c52cedeccda1","type":"LinearScale"}},"id":"02aeda9f-056f-4cba-a081-efaf0a0b0589","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"6aa0e56f-4999-440b-85c7-228af4ae43ea","type":"ColumnDataSource"},{"attributes":{},"id":"c8473f9b-0936-4222-9bdc-1061d8233169","type":"ResetTool"},{"attributes":{"overlay":{"id":"286d1ee8-3c9b-4014-8406-b8d020d20632","type":"BoxAnnotation"}},"id":"6dbc0794-e793-4050-aed2-3db0225a9b89","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"6aa0e56f-4999-440b-85c7-228af4ae43ea","type":"ColumnDataSource"},"glyph":{"id":"d1f46131-ce3b-4dc0-a092-f0d2c836660a","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f0d67c9e-170b-490b-b084-39486447a63c","type":"Asterisk"},"selection_glyph":null,"view":{"id":"1df0618f-cf9d-4e04-9b0d-3a7f8d54824c","type":"CDSView"}},"id":"864edb25-087f-4c92-9d17-d67aa197f6ef","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"02aeda9f-056f-4cba-a081-efaf0a0b0589","subtype":"Figure","type":"Plot"},"ticker":{"id":"c39974ab-df87-4cb2-befe-4bb1c8759e7a","type":"BasicTicker"}},"id":"b196b0e0-1e7c-4a74-8ea1-e9b6a0e24c44","type":"Grid"},{"attributes":{},"id":"d3d69a31-8795-4987-a01e-61b932da49e6","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d3d69a31-8795-4987-a01e-61b932da49e6","type":"PanTool"},{"id":"daf6968c-1701-4edd-9bb5-74412514cbc6","type":"WheelZoomTool"},{"id":"6dbc0794-e793-4050-aed2-3db0225a9b89","type":"BoxZoomTool"},{"id":"e4fe58fa-a56a-4761-8825-23c2b876f724","type":"SaveTool"},{"id":"c8473f9b-0936-4222-9bdc-1061d8233169","type":"ResetTool"},{"id":"dbc15f44-f4ed-4ca4-8d53-33c896e0f1d8","type":"HelpTool"}]},"id":"5f2b38c6-339f-477e-8f73-62594fd73fd0","type":"Toolbar"},{"attributes":{},"id":"350c67f7-d6b3-4298-ae05-7dffa742d5e6","type":"BasicTickFormatter"},{"attributes":{},"id":"8ecb7b3e-66ba-4893-8504-d653659c3137","type":"BasicTicker"},{"attributes":{},"id":"dbc15f44-f4ed-4ca4-8d53-33c896e0f1d8","type":"HelpTool"},{"attributes":{},"id":"daf6968c-1701-4edd-9bb5-74412514cbc6","type":"WheelZoomTool"},{"attributes":{},"id":"a33ff909-f196-4271-9ac1-147c9d47fb45","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"b7d1f870-f243-41b8-87e8-a29a04c12d59","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"02aeda9f-056f-4cba-a081-efaf0a0b0589","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ecb7b3e-66ba-4893-8504-d653659c3137","type":"BasicTicker"}},"id":"dac89bdf-50b4-469a-bc08-618341824d11","type":"Grid"},{"attributes":{"callback":null},"id":"10f605ac-be49-4ef2-9560-2db1f9576abe","type":"DataRange1d"},{"attributes":{"formatter":{"id":"350c67f7-d6b3-4298-ae05-7dffa742d5e6","type":"BasicTickFormatter"},"plot":{"id":"02aeda9f-056f-4cba-a081-efaf0a0b0589","subtype":"Figure","type":"Plot"},"ticker":{"id":"c39974ab-df87-4cb2-befe-4bb1c8759e7a","type":"BasicTicker"}},"id":"b9d8fb36-ca5f-46e1-8165-6036ea2930ed","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f0d67c9e-170b-490b-b084-39486447a63c","type":"Asterisk"},{"attributes":{"callback":null},"id":"213a6544-ab7b-41f4-bb99-8b49838a1552","type":"DataRange1d"},{"attributes":{},"id":"c39974ab-df87-4cb2-befe-4bb1c8759e7a","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"286d1ee8-3c9b-4014-8406-b8d020d20632","type":"BoxAnnotation"}],"root_ids":["02aeda9f-056f-4cba-a081-efaf0a0b0589"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"6727195b-07fd-4d36-b13c-711213d27e9f","elementid":"65c6c8f8-4e4e-4887-9ab2-525a1accf51f","modelid":"02aeda9f-056f-4cba-a081-efaf0a0b0589"}];
                
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
