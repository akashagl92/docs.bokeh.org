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
      };var element = document.getElementById("1be2f918-347c-48e6-82d5-e6af28926173");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1be2f918-347c-48e6-82d5-e6af28926173' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"da1f6b1a-217f-4838-8227-24d559c3cda0":{"roots":{"references":[{"attributes":{},"id":"87e37c8b-e1b5-41f1-88ee-7ba81ef7aa3a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"87e37c8b-e1b5-41f1-88ee-7ba81ef7aa3a","type":"BasicTickFormatter"},"plot":{"id":"ec12a559-13a1-4e72-a666-9ee73318881e","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7b7a4f9-1fbb-483c-b594-bba7e8eadbbf","type":"BasicTicker"}},"id":"605e6f97-fca7-4490-8e29-6a2b1bd22498","type":"LinearAxis"},{"attributes":{},"id":"a7b7a4f9-1fbb-483c-b594-bba7e8eadbbf","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ec12a559-13a1-4e72-a666-9ee73318881e","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7b7a4f9-1fbb-483c-b594-bba7e8eadbbf","type":"BasicTicker"}},"id":"153c231d-fc4e-42fd-9f05-c3d16135d122","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"6395bc27-d55d-4932-b277-090b395016f7","type":"Quad"},{"attributes":{},"id":"79490dd5-db03-492a-a652-bc692dbc842d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["left","right","top","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"1e3d9855-a42f-412c-8560-a819569c6f7e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1e3d9855-a42f-412c-8560-a819569c6f7e","type":"ColumnDataSource"},"glyph":{"id":"d32ac56c-cae8-4945-8070-6e296d2978ba","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6395bc27-d55d-4932-b277-090b395016f7","type":"Quad"},"selection_glyph":null,"view":{"id":"3d813f99-ec62-444d-a0fa-24769ebfc5ae","type":"CDSView"}},"id":"7770ec6e-92c9-4c60-a0a8-f5e6b3d26a77","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8524f4e3-d7bd-4def-b77c-2a20e86a9993","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"fe6c0ec4-67e7-4940-b1a6-1055cb513111","type":"LinearAxis"}],"left":[{"id":"605e6f97-fca7-4490-8e29-6a2b1bd22498","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fe6c0ec4-67e7-4940-b1a6-1055cb513111","type":"LinearAxis"},{"id":"1fc1842e-8fca-4025-8568-87a0b1ae1ec6","type":"Grid"},{"id":"605e6f97-fca7-4490-8e29-6a2b1bd22498","type":"LinearAxis"},{"id":"153c231d-fc4e-42fd-9f05-c3d16135d122","type":"Grid"},{"id":"8524f4e3-d7bd-4def-b77c-2a20e86a9993","type":"BoxAnnotation"},{"id":"7770ec6e-92c9-4c60-a0a8-f5e6b3d26a77","type":"GlyphRenderer"}],"title":{"id":"9d616b2e-0ae5-48ad-b7ac-47b85063ba28","type":"Title"},"toolbar":{"id":"923ad100-d0de-47b3-a7e3-126cb765dd8a","type":"Toolbar"},"x_range":{"id":"b9f826e7-affc-47dd-82e9-1467b5c4b33a","type":"DataRange1d"},"x_scale":{"id":"bafce425-15d1-4324-92a4-01cc7badfe4c","type":"LinearScale"},"y_range":{"id":"0e7a10a9-36d6-4022-b1ca-0bd55bd14f77","type":"DataRange1d"},"y_scale":{"id":"cc3c884e-fd52-4575-9f9b-35a9dfe5bd15","type":"LinearScale"}},"id":"ec12a559-13a1-4e72-a666-9ee73318881e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0f1e9a4e-369d-4ccb-95a0-dc00e3f95015","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0f1e9a4e-369d-4ccb-95a0-dc00e3f95015","type":"PanTool"},{"id":"fcd5508c-a241-40b7-851d-6cad796765f3","type":"WheelZoomTool"},{"id":"cab4d03b-7bb5-451b-a5be-a8d7ecce37c8","type":"BoxZoomTool"},{"id":"e4b199ea-02a5-4130-b9b9-5d77855424aa","type":"SaveTool"},{"id":"065f6591-8279-47ad-a731-d32d3c6ec221","type":"ResetTool"},{"id":"2460a878-5c7c-45b6-a8c2-10416c901b00","type":"HelpTool"}]},"id":"923ad100-d0de-47b3-a7e3-126cb765dd8a","type":"Toolbar"},{"attributes":{"source":{"id":"1e3d9855-a42f-412c-8560-a819569c6f7e","type":"ColumnDataSource"}},"id":"3d813f99-ec62-444d-a0fa-24769ebfc5ae","type":"CDSView"},{"attributes":{"formatter":{"id":"79490dd5-db03-492a-a652-bc692dbc842d","type":"BasicTickFormatter"},"plot":{"id":"ec12a559-13a1-4e72-a666-9ee73318881e","subtype":"Figure","type":"Plot"},"ticker":{"id":"24fcf046-9d4b-4218-ac72-a0f7536933dd","type":"BasicTicker"}},"id":"fe6c0ec4-67e7-4940-b1a6-1055cb513111","type":"LinearAxis"},{"attributes":{},"id":"fcd5508c-a241-40b7-851d-6cad796765f3","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"b9f826e7-affc-47dd-82e9-1467b5c4b33a","type":"DataRange1d"},{"attributes":{"overlay":{"id":"8524f4e3-d7bd-4def-b77c-2a20e86a9993","type":"BoxAnnotation"}},"id":"cab4d03b-7bb5-451b-a5be-a8d7ecce37c8","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"ec12a559-13a1-4e72-a666-9ee73318881e","subtype":"Figure","type":"Plot"},"ticker":{"id":"24fcf046-9d4b-4218-ac72-a0f7536933dd","type":"BasicTicker"}},"id":"1fc1842e-8fca-4025-8568-87a0b1ae1ec6","type":"Grid"},{"attributes":{},"id":"e4b199ea-02a5-4130-b9b9-5d77855424aa","type":"SaveTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"d32ac56c-cae8-4945-8070-6e296d2978ba","type":"Quad"},{"attributes":{},"id":"065f6591-8279-47ad-a731-d32d3c6ec221","type":"ResetTool"},{"attributes":{"callback":null},"id":"0e7a10a9-36d6-4022-b1ca-0bd55bd14f77","type":"DataRange1d"},{"attributes":{},"id":"2460a878-5c7c-45b6-a8c2-10416c901b00","type":"HelpTool"},{"attributes":{},"id":"bafce425-15d1-4324-92a4-01cc7badfe4c","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"9d616b2e-0ae5-48ad-b7ac-47b85063ba28","type":"Title"},{"attributes":{},"id":"cc3c884e-fd52-4575-9f9b-35a9dfe5bd15","type":"LinearScale"},{"attributes":{},"id":"24fcf046-9d4b-4218-ac72-a0f7536933dd","type":"BasicTicker"}],"root_ids":["ec12a559-13a1-4e72-a666-9ee73318881e"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"da1f6b1a-217f-4838-8227-24d559c3cda0","elementid":"1be2f918-347c-48e6-82d5-e6af28926173","modelid":"ec12a559-13a1-4e72-a666-9ee73318881e"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
