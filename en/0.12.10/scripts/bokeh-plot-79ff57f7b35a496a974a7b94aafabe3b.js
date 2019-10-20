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
      };var element = document.getElementById("ba5a9c63-b47f-418b-ab85-1f90adbf1d85");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ba5a9c63-b47f-418b-ab85-1f90adbf1d85' but no matching script tag was found. ")
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
                    var docs_json = {"e0b0e79a-a1be-454a-84c4-894669b3effd":{"roots":{"references":[{"attributes":{},"id":"42fff8da-3ae0-4a27-8dd5-271939e7b28d","type":"BasicTicker"},{"attributes":{},"id":"7fbff29f-e47d-47dd-ad72-c75a7a59c052","type":"BasicTickFormatter"},{"attributes":{},"id":"89fdb3a9-72ee-47dc-bfb9-3c4e7e594b94","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"89345272-00ce-4fba-8ca3-b8016a41c138","subtype":"Figure","type":"Plot"},"ticker":{"id":"42fff8da-3ae0-4a27-8dd5-271939e7b28d","type":"BasicTicker"}},"id":"c7e5550b-8948-4fdb-9927-69b764e20249","type":"Grid"},{"attributes":{"overlay":{"id":"c7bf5ef2-44ad-4f7f-8695-b0b3eaff6235","type":"BoxAnnotation"}},"id":"6f7bc269-4d76-4a39-9447-f240e6a6d437","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"86e6e451-a636-4e14-ad39-7c5eb21430fe","type":"ColumnDataSource"},{"attributes":{},"id":"0629c1c0-dbbc-418d-bacf-2e7b18aa147a","type":"ResetTool"},{"attributes":{"data_source":{"id":"86e6e451-a636-4e14-ad39-7c5eb21430fe","type":"ColumnDataSource"},"glyph":{"id":"98e86bf8-486e-49f2-97d2-0d2935a6afcf","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c25ee584-b156-41d4-8b81-1f21cb60babf","type":"Circle"},"selection_glyph":null,"view":{"id":"1f8fdce0-ebe1-4f86-b910-0cb9ef33397c","type":"CDSView"}},"id":"e21bbbcc-2b29-4e72-9e07-7d3d63f59737","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"9ef87697-e3ca-4a83-9992-4f155d2da91f","type":"LinearAxis"}],"left":[{"id":"dbbda279-c30e-4bfc-a33f-3fb744ba906f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9ef87697-e3ca-4a83-9992-4f155d2da91f","type":"LinearAxis"},{"id":"7317f84d-22f9-4d85-9d55-eab31460a12a","type":"Grid"},{"id":"dbbda279-c30e-4bfc-a33f-3fb744ba906f","type":"LinearAxis"},{"id":"c7e5550b-8948-4fdb-9927-69b764e20249","type":"Grid"},{"id":"c7bf5ef2-44ad-4f7f-8695-b0b3eaff6235","type":"BoxAnnotation"},{"id":"e21bbbcc-2b29-4e72-9e07-7d3d63f59737","type":"GlyphRenderer"}],"title":{"id":"8d4a031e-ea74-4ef0-9279-398e08941069","type":"Title"},"toolbar":{"id":"ccd7aaf0-39a8-4b2d-9441-c0c3b4bcd79c","type":"Toolbar"},"x_range":{"id":"a8bd4637-1cce-44ee-81af-e6b74a6bd0f1","type":"DataRange1d"},"x_scale":{"id":"ba115ae1-00c3-4fb0-bee5-1dabad99d6b6","type":"LinearScale"},"y_range":{"id":"4f9973c8-fe1c-49e7-a6d8-d0525f845c67","type":"DataRange1d"},"y_scale":{"id":"218d7145-7981-4dd9-bef9-7eee92a4a682","type":"LinearScale"}},"id":"89345272-00ce-4fba-8ca3-b8016a41c138","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"98e86bf8-486e-49f2-97d2-0d2935a6afcf","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bba47c0c-27c9-4365-9d6b-d23a7123bd2a","type":"PanTool"},{"id":"1bb8d482-398a-4f34-92a8-6645884d71b8","type":"WheelZoomTool"},{"id":"6f7bc269-4d76-4a39-9447-f240e6a6d437","type":"BoxZoomTool"},{"id":"48d15af7-e8f9-43c9-874e-18dfb30a8615","type":"SaveTool"},{"id":"0629c1c0-dbbc-418d-bacf-2e7b18aa147a","type":"ResetTool"},{"id":"89fdb3a9-72ee-47dc-bfb9-3c4e7e594b94","type":"HelpTool"}]},"id":"ccd7aaf0-39a8-4b2d-9441-c0c3b4bcd79c","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c7bf5ef2-44ad-4f7f-8695-b0b3eaff6235","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c25ee584-b156-41d4-8b81-1f21cb60babf","type":"Circle"},{"attributes":{"callback":null},"id":"a8bd4637-1cce-44ee-81af-e6b74a6bd0f1","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7420862c-c54a-43ab-95da-111a85acfc65","type":"BasicTickFormatter"},"plot":{"id":"89345272-00ce-4fba-8ca3-b8016a41c138","subtype":"Figure","type":"Plot"},"ticker":{"id":"42fff8da-3ae0-4a27-8dd5-271939e7b28d","type":"BasicTicker"}},"id":"dbbda279-c30e-4bfc-a33f-3fb744ba906f","type":"LinearAxis"},{"attributes":{},"id":"1bb8d482-398a-4f34-92a8-6645884d71b8","type":"WheelZoomTool"},{"attributes":{},"id":"ba115ae1-00c3-4fb0-bee5-1dabad99d6b6","type":"LinearScale"},{"attributes":{},"id":"bba47c0c-27c9-4365-9d6b-d23a7123bd2a","type":"PanTool"},{"attributes":{"callback":null},"id":"4f9973c8-fe1c-49e7-a6d8-d0525f845c67","type":"DataRange1d"},{"attributes":{"source":{"id":"86e6e451-a636-4e14-ad39-7c5eb21430fe","type":"ColumnDataSource"}},"id":"1f8fdce0-ebe1-4f86-b910-0cb9ef33397c","type":"CDSView"},{"attributes":{"formatter":{"id":"7fbff29f-e47d-47dd-ad72-c75a7a59c052","type":"BasicTickFormatter"},"plot":{"id":"89345272-00ce-4fba-8ca3-b8016a41c138","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2689097-577b-4461-92c1-73364fcb3e30","type":"BasicTicker"}},"id":"9ef87697-e3ca-4a83-9992-4f155d2da91f","type":"LinearAxis"},{"attributes":{},"id":"48d15af7-e8f9-43c9-874e-18dfb30a8615","type":"SaveTool"},{"attributes":{},"id":"218d7145-7981-4dd9-bef9-7eee92a4a682","type":"LinearScale"},{"attributes":{},"id":"7420862c-c54a-43ab-95da-111a85acfc65","type":"BasicTickFormatter"},{"attributes":{},"id":"a2689097-577b-4461-92c1-73364fcb3e30","type":"BasicTicker"},{"attributes":{"plot":{"id":"89345272-00ce-4fba-8ca3-b8016a41c138","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2689097-577b-4461-92c1-73364fcb3e30","type":"BasicTicker"}},"id":"7317f84d-22f9-4d85-9d55-eab31460a12a","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"8d4a031e-ea74-4ef0-9279-398e08941069","type":"Title"}],"root_ids":["89345272-00ce-4fba-8ca3-b8016a41c138"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e0b0e79a-a1be-454a-84c4-894669b3effd","elementid":"ba5a9c63-b47f-418b-ab85-1f90adbf1d85","modelid":"89345272-00ce-4fba-8ca3-b8016a41c138"}];
                
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
