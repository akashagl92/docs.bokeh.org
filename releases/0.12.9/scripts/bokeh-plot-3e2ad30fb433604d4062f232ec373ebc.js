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
      };var element = document.getElementById("e8b0c3e9-bd25-47c6-bb80-8b3a4f82afae");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e8b0c3e9-bd25-47c6-bb80-8b3a4f82afae' but no matching script tag was found. ")
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
                    var docs_json = {"bd82a65a-47e9-43f0-921e-f3b7839d42cc":{"roots":{"references":[{"attributes":{},"id":"be3128db-6f67-4f77-87e1-d93552bd18c4","type":"CategoricalTicker"},{"attributes":{},"id":"af21d47a-39f3-4738-9300-806dadf437b9","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"2fc5df41-cc3d-47b3-8c91-0730d47c0bc2","subtype":"Figure","type":"Plot"},"ticker":{"id":"be3128db-6f67-4f77-87e1-d93552bd18c4","type":"CategoricalTicker"}},"id":"808f4c54-4e3f-47bc-9ad3-8d4eb4941614","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ac844615-ff7d-482e-8cf4-c218ab6009db","type":"PanTool"},{"id":"af21d47a-39f3-4738-9300-806dadf437b9","type":"WheelZoomTool"},{"id":"91b68372-d288-4cbf-a912-ce3a91aa683e","type":"BoxZoomTool"},{"id":"84fb0ad8-8554-4ac0-b76b-faef38e1fdd4","type":"SaveTool"},{"id":"c7187e01-8492-4c04-9aa3-801ada4375a0","type":"ResetTool"},{"id":"85ff8b92-bc5f-49b1-97af-24b402cb6e53","type":"HelpTool"}]},"id":"7e127ba2-7c3f-41f7-bda3-4b85c0ff0367","type":"Toolbar"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"068b30a0-b7a3-44a4-871a-8d18f8d3ee8f","type":"Circle"},{"attributes":{"callback":null},"id":"cc30f2ea-6ca7-478b-8595-4ca2b04d53fa","type":"DataRange1d"},{"attributes":{},"id":"85ff8b92-bc5f-49b1-97af-24b402cb6e53","type":"HelpTool"},{"attributes":{},"id":"953fa99f-4eef-41d5-b3d6-ab03e1edaa38","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"b10ad943-12f4-4273-8917-4bd70c88eacb","type":"ColumnDataSource"},"glyph":{"id":"068b30a0-b7a3-44a4-871a-8d18f8d3ee8f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6c79baea-c663-452d-b771-ca9a019153a6","type":"Circle"},"selection_glyph":null,"view":{"id":"1e7d4bad-54c8-4a40-bf3f-a460fb5fb14e","type":"CDSView"}},"id":"c84694e2-5a56-4a2a-87d7-9fdc7b8dcfd3","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"e6739f76-6981-4e89-96fe-bacf8b0d8159","type":"FactorRange"},{"attributes":{"overlay":{"id":"ddff0985-2722-4016-9827-b7af03a8242f","type":"BoxAnnotation"}},"id":"91b68372-d288-4cbf-a912-ce3a91aa683e","type":"BoxZoomTool"},{"attributes":{},"id":"1b7bcfb9-fae2-4f7c-85a7-c5e433f133cf","type":"LinearScale"},{"attributes":{"plot":{"id":"2fc5df41-cc3d-47b3-8c91-0730d47c0bc2","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e427daf-8d0a-41df-848a-e7c281d41dde","type":"BasicTicker"}},"id":"6a2a9d8d-0c8f-45ee-92bf-b4f102f3aa1f","type":"Grid"},{"attributes":{},"id":"493a0765-5c0e-40e1-9255-492afb8bca73","type":"CategoricalScale"},{"attributes":{},"id":"ac844615-ff7d-482e-8cf4-c218ab6009db","type":"PanTool"},{"attributes":{},"id":"84fb0ad8-8554-4ac0-b76b-faef38e1fdd4","type":"SaveTool"},{"attributes":{"source":{"id":"b10ad943-12f4-4273-8917-4bd70c88eacb","type":"ColumnDataSource"}},"id":"1e7d4bad-54c8-4a40-bf3f-a460fb5fb14e","type":"CDSView"},{"attributes":{"formatter":{"id":"786a5b6c-0832-4b99-88d1-9f9100f2006a","type":"BasicTickFormatter"},"plot":{"id":"2fc5df41-cc3d-47b3-8c91-0730d47c0bc2","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e427daf-8d0a-41df-848a-e7c281d41dde","type":"BasicTicker"}},"id":"fcffa408-1e21-43d4-b411-8ae4a5bdeb61","type":"LinearAxis"},{"attributes":{},"id":"4e427daf-8d0a-41df-848a-e7c281d41dde","type":"BasicTicker"},{"attributes":{},"id":"786a5b6c-0832-4b99-88d1-9f9100f2006a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"953fa99f-4eef-41d5-b3d6-ab03e1edaa38","type":"CategoricalTickFormatter"},"plot":{"id":"2fc5df41-cc3d-47b3-8c91-0730d47c0bc2","subtype":"Figure","type":"Plot"},"ticker":{"id":"be3128db-6f67-4f77-87e1-d93552bd18c4","type":"CategoricalTicker"}},"id":"1f3cc641-1502-4d20-804e-6267ed35467d","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c79baea-c663-452d-b771-ca9a019153a6","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ddff0985-2722-4016-9827-b7af03a8242f","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"b10ad943-12f4-4273-8917-4bd70c88eacb","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"17aef32a-37ea-480e-b81b-410bcf4b8652","type":"Title"},{"attributes":{},"id":"c7187e01-8492-4c04-9aa3-801ada4375a0","type":"ResetTool"},{"attributes":{"below":[{"id":"fcffa408-1e21-43d4-b411-8ae4a5bdeb61","type":"LinearAxis"}],"left":[{"id":"1f3cc641-1502-4d20-804e-6267ed35467d","type":"CategoricalAxis"}],"renderers":[{"id":"fcffa408-1e21-43d4-b411-8ae4a5bdeb61","type":"LinearAxis"},{"id":"6a2a9d8d-0c8f-45ee-92bf-b4f102f3aa1f","type":"Grid"},{"id":"1f3cc641-1502-4d20-804e-6267ed35467d","type":"CategoricalAxis"},{"id":"808f4c54-4e3f-47bc-9ad3-8d4eb4941614","type":"Grid"},{"id":"ddff0985-2722-4016-9827-b7af03a8242f","type":"BoxAnnotation"},{"id":"c84694e2-5a56-4a2a-87d7-9fdc7b8dcfd3","type":"GlyphRenderer"}],"title":{"id":"17aef32a-37ea-480e-b81b-410bcf4b8652","type":"Title"},"toolbar":{"id":"7e127ba2-7c3f-41f7-bda3-4b85c0ff0367","type":"Toolbar"},"x_range":{"id":"cc30f2ea-6ca7-478b-8595-4ca2b04d53fa","type":"DataRange1d"},"x_scale":{"id":"1b7bcfb9-fae2-4f7c-85a7-c5e433f133cf","type":"LinearScale"},"y_range":{"id":"e6739f76-6981-4e89-96fe-bacf8b0d8159","type":"FactorRange"},"y_scale":{"id":"493a0765-5c0e-40e1-9255-492afb8bca73","type":"CategoricalScale"}},"id":"2fc5df41-cc3d-47b3-8c91-0730d47c0bc2","subtype":"Figure","type":"Plot"}],"root_ids":["2fc5df41-cc3d-47b3-8c91-0730d47c0bc2"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"bd82a65a-47e9-43f0-921e-f3b7839d42cc","elementid":"e8b0c3e9-bd25-47c6-bb80-8b3a4f82afae","modelid":"2fc5df41-cc3d-47b3-8c91-0730d47c0bc2"}];
                
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
