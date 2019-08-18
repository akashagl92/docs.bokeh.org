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
      };var element = document.getElementById("92785921-6c74-4a4d-9871-e5ac8d3295d7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '92785921-6c74-4a4d-9871-e5ac8d3295d7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"8573637e-9a11-461d-a8dd-cf976d278c39":{"roots":{"references":[{"attributes":{},"id":"4306c24e-f925-4c41-8cd0-55bf99ef05f6","type":"SaveTool"},{"attributes":{},"id":"f0195969-55bc-436e-b71c-b44e7839fba7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d0193ea4-d71c-4ba9-aff3-d9cfbf8554cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"15232704-61db-4093-8447-b37fd93427ef","type":"BasicTicker"}},"id":"1676f269-1387-4b78-a26a-96608c806a0b","type":"Grid"},{"attributes":{},"id":"c701f4e2-e85c-45c1-ba85-a5c9364fc13b","type":"BasicTicker"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"e1bb3e84-5f62-4cfb-9639-daa593fc6fd5","type":"AnnularWedge"},{"attributes":{},"id":"7ec4c096-918e-4a9f-bc4d-cf5bc992c1e4","type":"ResetTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"c705f582-8346-4130-bc56-ab6dad3079f9","type":"AnnularWedge"},{"attributes":{"source":{"id":"2cc84cc5-f275-415c-b937-3035e6c926e0","type":"ColumnDataSource"}},"id":"1c52e762-3500-4747-befc-2c2a5caa805a","type":"CDSView"},{"attributes":{"below":[{"id":"3e2fc549-0684-4018-8c86-d449a848f5ac","type":"LinearAxis"}],"left":[{"id":"6c6bf580-9e8a-4c08-a9fc-f23f984952d0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3e2fc549-0684-4018-8c86-d449a848f5ac","type":"LinearAxis"},{"id":"1676f269-1387-4b78-a26a-96608c806a0b","type":"Grid"},{"id":"6c6bf580-9e8a-4c08-a9fc-f23f984952d0","type":"LinearAxis"},{"id":"19bed816-9172-4124-a9ff-e1aa53524538","type":"Grid"},{"id":"9f4dbedb-1f0c-465d-b714-d83c4bce5e81","type":"BoxAnnotation"},{"id":"4470864c-5584-4a18-959e-c72492995c2e","type":"GlyphRenderer"}],"title":{"id":"08932ec3-c420-49ad-9b17-f54cbcaf399a","type":"Title"},"toolbar":{"id":"689eeb3d-3d3a-4ebe-aaa3-70123e4ecea9","type":"Toolbar"},"x_range":{"id":"41316d37-8fa5-48ce-81b7-059fc039f30d","type":"DataRange1d"},"x_scale":{"id":"8cf1f382-6997-4cd2-b4f4-ee964a901300","type":"LinearScale"},"y_range":{"id":"bd1f8441-d32f-4529-8bb9-93383e49f44f","type":"DataRange1d"},"y_scale":{"id":"ac0413a0-44fb-444a-b882-10486fedef6a","type":"LinearScale"}},"id":"d0193ea4-d71c-4ba9-aff3-d9cfbf8554cd","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"2cc84cc5-f275-415c-b937-3035e6c926e0","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f90f71c9-afdd-41c9-b816-9ae15b46f9df","type":"PanTool"},{"id":"dd07c665-8886-4410-9272-097a6694278f","type":"WheelZoomTool"},{"id":"b5163b6d-d0b6-4ba7-9a2b-f724197e176c","type":"BoxZoomTool"},{"id":"4306c24e-f925-4c41-8cd0-55bf99ef05f6","type":"SaveTool"},{"id":"7ec4c096-918e-4a9f-bc4d-cf5bc992c1e4","type":"ResetTool"},{"id":"2499b5fb-981b-49ec-a393-bd4c1c3470ff","type":"HelpTool"}]},"id":"689eeb3d-3d3a-4ebe-aaa3-70123e4ecea9","type":"Toolbar"},{"attributes":{},"id":"4f842b94-2406-48b9-ad26-5d8b1e149003","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4f842b94-2406-48b9-ad26-5d8b1e149003","type":"BasicTickFormatter"},"plot":{"id":"d0193ea4-d71c-4ba9-aff3-d9cfbf8554cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"15232704-61db-4093-8447-b37fd93427ef","type":"BasicTicker"}},"id":"3e2fc549-0684-4018-8c86-d449a848f5ac","type":"LinearAxis"},{"attributes":{},"id":"2499b5fb-981b-49ec-a393-bd4c1c3470ff","type":"HelpTool"},{"attributes":{},"id":"dd07c665-8886-4410-9272-097a6694278f","type":"WheelZoomTool"},{"attributes":{},"id":"ac0413a0-44fb-444a-b882-10486fedef6a","type":"LinearScale"},{"attributes":{"callback":null},"id":"bd1f8441-d32f-4529-8bb9-93383e49f44f","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"d0193ea4-d71c-4ba9-aff3-d9cfbf8554cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c701f4e2-e85c-45c1-ba85-a5c9364fc13b","type":"BasicTicker"}},"id":"19bed816-9172-4124-a9ff-e1aa53524538","type":"Grid"},{"attributes":{"data_source":{"id":"2cc84cc5-f275-415c-b937-3035e6c926e0","type":"ColumnDataSource"},"glyph":{"id":"e1bb3e84-5f62-4cfb-9639-daa593fc6fd5","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c705f582-8346-4130-bc56-ab6dad3079f9","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"1c52e762-3500-4747-befc-2c2a5caa805a","type":"CDSView"}},"id":"4470864c-5584-4a18-959e-c72492995c2e","type":"GlyphRenderer"},{"attributes":{},"id":"8cf1f382-6997-4cd2-b4f4-ee964a901300","type":"LinearScale"},{"attributes":{"callback":null},"id":"41316d37-8fa5-48ce-81b7-059fc039f30d","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"08932ec3-c420-49ad-9b17-f54cbcaf399a","type":"Title"},{"attributes":{},"id":"f90f71c9-afdd-41c9-b816-9ae15b46f9df","type":"PanTool"},{"attributes":{},"id":"15232704-61db-4093-8447-b37fd93427ef","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9f4dbedb-1f0c-465d-b714-d83c4bce5e81","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"9f4dbedb-1f0c-465d-b714-d83c4bce5e81","type":"BoxAnnotation"}},"id":"b5163b6d-d0b6-4ba7-9a2b-f724197e176c","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"f0195969-55bc-436e-b71c-b44e7839fba7","type":"BasicTickFormatter"},"plot":{"id":"d0193ea4-d71c-4ba9-aff3-d9cfbf8554cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c701f4e2-e85c-45c1-ba85-a5c9364fc13b","type":"BasicTicker"}},"id":"6c6bf580-9e8a-4c08-a9fc-f23f984952d0","type":"LinearAxis"}],"root_ids":["d0193ea4-d71c-4ba9-aff3-d9cfbf8554cd"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"8573637e-9a11-461d-a8dd-cf976d278c39","elementid":"92785921-6c74-4a4d-9871-e5ac8d3295d7","modelid":"d0193ea4-d71c-4ba9-aff3-d9cfbf8554cd"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
