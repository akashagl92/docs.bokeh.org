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
      };var element = document.getElementById("ce340448-6f7e-4e2c-9f8a-04f60e63a2fa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ce340448-6f7e-4e2c-9f8a-04f60e63a2fa' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                    
                  var docs_json = '{"6379b2e1-f4a9-4c70-b12c-5eda0d79a2fe":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"d00312ac-2b42-45e3-8fe0-66ab51f395c6","type":"Title"},{"attributes":{},"id":"360898d0-a20d-4b8a-9f82-4d035564abf1","type":"SaveTool"},{"attributes":{},"id":"4e2fa8ea-cc43-4b07-b773-f9153e176b88","type":"BasicTicker"},{"attributes":{"data_source":{"id":"87abe274-5eda-40fe-9009-14a5f23c606d","type":"ColumnDataSource"},"glyph":{"id":"eacc3a81-8140-4e23-b2f0-d3147b776346","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93a93a5e-9737-4189-bc49-566fd529040d","type":"Circle"},"selection_glyph":null,"view":{"id":"3258e93a-abe5-44f7-9e90-6ef572a46d33","type":"CDSView"}},"id":"b6dbaa18-213b-414b-8215-329d768408a9","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"24bedc0c-4272-4660-b4c1-dcbfeb99d7d6","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"eacc3a81-8140-4e23-b2f0-d3147b776346","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b7a6527d-f2b8-4a21-8872-947a61eca31e","type":"PanTool"},{"id":"16c2b1d7-f836-4105-aaa4-8af529f387cb","type":"ResetTool"},{"id":"360898d0-a20d-4b8a-9f82-4d035564abf1","type":"SaveTool"}]},"id":"2de9ecc8-40eb-4dcf-9b75-9bad3b920746","type":"Toolbar"},{"attributes":{"below":[{"id":"d6cd22cf-670f-425e-856b-a7b6c40e7514","type":"LinearAxis"}],"left":[{"id":"9af75fc2-68bb-45ea-8cc3-c7343ca824be","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d6cd22cf-670f-425e-856b-a7b6c40e7514","type":"LinearAxis"},{"id":"940f21ac-9456-4a10-9000-185a1513eea0","type":"Grid"},{"id":"9af75fc2-68bb-45ea-8cc3-c7343ca824be","type":"LinearAxis"},{"id":"c31c0233-0792-4b4b-9cbf-15b2c7d733c5","type":"Grid"},{"id":"b6dbaa18-213b-414b-8215-329d768408a9","type":"GlyphRenderer"}],"title":{"id":"d00312ac-2b42-45e3-8fe0-66ab51f395c6","type":"Title"},"toolbar":{"id":"2de9ecc8-40eb-4dcf-9b75-9bad3b920746","type":"Toolbar"},"x_range":{"id":"24bedc0c-4272-4660-b4c1-dcbfeb99d7d6","type":"DataRange1d"},"x_scale":{"id":"25856887-f4c4-4728-a3cf-c36b98c0c3a2","type":"LinearScale"},"y_range":{"id":"95d3b732-985a-4bd0-9391-5dc7467ef240","type":"DataRange1d"},"y_scale":{"id":"1dd8d995-7fef-4e91-9c1a-2989828af98c","type":"LinearScale"}},"id":"3cd38009-8a43-45e9-9ac1-da717764162a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b7a6527d-f2b8-4a21-8872-947a61eca31e","type":"PanTool"},{"attributes":{"formatter":{"id":"8dce7368-57ba-42c1-a6a6-f7bbccba1a3d","type":"BasicTickFormatter"},"plot":{"id":"3cd38009-8a43-45e9-9ac1-da717764162a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e2fa8ea-cc43-4b07-b773-f9153e176b88","type":"BasicTicker"}},"id":"9af75fc2-68bb-45ea-8cc3-c7343ca824be","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"3cd38009-8a43-45e9-9ac1-da717764162a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e2fa8ea-cc43-4b07-b773-f9153e176b88","type":"BasicTicker"}},"id":"c31c0233-0792-4b4b-9cbf-15b2c7d733c5","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"93a93a5e-9737-4189-bc49-566fd529040d","type":"Circle"},{"attributes":{},"id":"ac76ef05-ee9e-4379-b68b-dcf031f3d4f6","type":"BasicTickFormatter"},{"attributes":{},"id":"f55709dd-5d38-4a10-a063-5adf0a2f9c6b","type":"BasicTicker"},{"attributes":{},"id":"16c2b1d7-f836-4105-aaa4-8af529f387cb","type":"ResetTool"},{"attributes":{"formatter":{"id":"ac76ef05-ee9e-4379-b68b-dcf031f3d4f6","type":"BasicTickFormatter"},"plot":{"id":"3cd38009-8a43-45e9-9ac1-da717764162a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f55709dd-5d38-4a10-a063-5adf0a2f9c6b","type":"BasicTicker"}},"id":"d6cd22cf-670f-425e-856b-a7b6c40e7514","type":"LinearAxis"},{"attributes":{"plot":{"id":"3cd38009-8a43-45e9-9ac1-da717764162a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f55709dd-5d38-4a10-a063-5adf0a2f9c6b","type":"BasicTicker"}},"id":"940f21ac-9456-4a10-9000-185a1513eea0","type":"Grid"},{"attributes":{},"id":"1dd8d995-7fef-4e91-9c1a-2989828af98c","type":"LinearScale"},{"attributes":{},"id":"8dce7368-57ba-42c1-a6a6-f7bbccba1a3d","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"87abe274-5eda-40fe-9009-14a5f23c606d","type":"ColumnDataSource"}},"id":"3258e93a-abe5-44f7-9e90-6ef572a46d33","type":"CDSView"},{"attributes":{},"id":"25856887-f4c4-4728-a3cf-c36b98c0c3a2","type":"LinearScale"},{"attributes":{"callback":null},"id":"95d3b732-985a-4bd0-9391-5dc7467ef240","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]}},"id":"87abe274-5eda-40fe-9009-14a5f23c606d","type":"ColumnDataSource"}],"root_ids":["3cd38009-8a43-45e9-9ac1-da717764162a"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"6379b2e1-f4a9-4c70-b12c-5eda0d79a2fe","elementid":"ce340448-6f7e-4e2c-9f8a-04f60e63a2fa","modelid":"3cd38009-8a43-45e9-9ac1-da717764162a"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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