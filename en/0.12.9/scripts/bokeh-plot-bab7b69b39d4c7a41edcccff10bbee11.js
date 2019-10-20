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
      };var element = document.getElementById("b402ea84-e2ca-4626-b38f-a7f903f37433");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b402ea84-e2ca-4626-b38f-a7f903f37433' but no matching script tag was found. ")
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
                    var docs_json = {"d53b1593-1038-4297-a87d-9eafe8721e56":{"roots":{"references":[{"attributes":{"callback":null},"id":"7fe03267-bf8b-4a43-8ed3-0b9bfee3ee86","type":"DataRange1d"},{"attributes":{},"id":"b5f9df84-4bcd-4720-a0ff-beee8d74cfbd","type":"WheelZoomTool"},{"attributes":{"source":{"id":"35227b2f-a817-4884-9240-bffda69467df","type":"ColumnDataSource"}},"id":"7cbcd91a-2fc1-494a-a755-ea52ecfdddfb","type":"CDSView"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"876dd567-1203-4bf0-b1c4-d7ea0dec96b5","type":"Wedge"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"53adab08-c245-464f-a321-e77854c45a96","type":"PanTool"},{"id":"b5f9df84-4bcd-4720-a0ff-beee8d74cfbd","type":"WheelZoomTool"},{"id":"9b9a757a-d9cf-40a4-973b-458c6a0c13ee","type":"BoxZoomTool"},{"id":"99fc8ee3-351f-4200-8938-ebd28b0c5ece","type":"SaveTool"},{"id":"b92e6eab-a1eb-466d-a1ac-e4512326d0cc","type":"ResetTool"},{"id":"1ff45828-74c9-4102-b700-d5d4122173d9","type":"HelpTool"}]},"id":"9dfe2378-9e7e-4de1-a6e0-58b9d3af8288","type":"Toolbar"},{"attributes":{},"id":"7ad3b1b6-7dbc-4338-b302-de20d4812658","type":"BasicTicker"},{"attributes":{},"id":"53adab08-c245-464f-a321-e77854c45a96","type":"PanTool"},{"attributes":{"formatter":{"id":"ed1c386a-1ad0-4010-945c-880e2b613511","type":"BasicTickFormatter"},"plot":{"id":"c8c53eef-79d7-41ac-8a54-a69dee4cdab0","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ad3b1b6-7dbc-4338-b302-de20d4812658","type":"BasicTicker"}},"id":"fdd2f014-0d6f-495e-91e4-1acb69cb5b88","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"35227b2f-a817-4884-9240-bffda69467df","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"c8c53eef-79d7-41ac-8a54-a69dee4cdab0","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b71ecf8-0e61-4e1b-8462-ee02939d92d7","type":"BasicTicker"}},"id":"c9c5431c-be6c-47ee-9a89-95d043c81d18","type":"Grid"},{"attributes":{},"id":"68196718-9085-444c-8018-80bc82054a08","type":"LinearScale"},{"attributes":{"below":[{"id":"fdd2f014-0d6f-495e-91e4-1acb69cb5b88","type":"LinearAxis"}],"left":[{"id":"86e37514-a8ee-4287-ab6b-ac5fff113d67","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"fdd2f014-0d6f-495e-91e4-1acb69cb5b88","type":"LinearAxis"},{"id":"276196a8-1252-4dd2-b1c5-27607a318b68","type":"Grid"},{"id":"86e37514-a8ee-4287-ab6b-ac5fff113d67","type":"LinearAxis"},{"id":"c9c5431c-be6c-47ee-9a89-95d043c81d18","type":"Grid"},{"id":"9862fb6a-0262-4e4c-abc0-fb9268d436e2","type":"BoxAnnotation"},{"id":"0fe2b26e-3ceb-4768-91f2-5e676391bdc4","type":"GlyphRenderer"}],"title":{"id":"cda292fe-841e-45f0-8080-44b7f494c57f","type":"Title"},"toolbar":{"id":"9dfe2378-9e7e-4de1-a6e0-58b9d3af8288","type":"Toolbar"},"x_range":{"id":"7fe03267-bf8b-4a43-8ed3-0b9bfee3ee86","type":"DataRange1d"},"x_scale":{"id":"7a57ee85-f9f3-4122-9d1c-8582d67ce9e8","type":"LinearScale"},"y_range":{"id":"b4626167-8f98-4c33-a633-b65757108f5c","type":"DataRange1d"},"y_scale":{"id":"68196718-9085-444c-8018-80bc82054a08","type":"LinearScale"}},"id":"c8c53eef-79d7-41ac-8a54-a69dee4cdab0","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b4626167-8f98-4c33-a633-b65757108f5c","type":"DataRange1d"},{"attributes":{},"id":"ed1c386a-1ad0-4010-945c-880e2b613511","type":"BasicTickFormatter"},{"attributes":{},"id":"b92e6eab-a1eb-466d-a1ac-e4512326d0cc","type":"ResetTool"},{"attributes":{"formatter":{"id":"ad879e8b-23f2-470c-99b2-5b39580b55c1","type":"BasicTickFormatter"},"plot":{"id":"c8c53eef-79d7-41ac-8a54-a69dee4cdab0","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b71ecf8-0e61-4e1b-8462-ee02939d92d7","type":"BasicTicker"}},"id":"86e37514-a8ee-4287-ab6b-ac5fff113d67","type":"LinearAxis"},{"attributes":{},"id":"6b71ecf8-0e61-4e1b-8462-ee02939d92d7","type":"BasicTicker"},{"attributes":{},"id":"7a57ee85-f9f3-4122-9d1c-8582d67ce9e8","type":"LinearScale"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf98bb4e-0885-48e4-abb1-b2777087aca7","type":"Wedge"},{"attributes":{"overlay":{"id":"9862fb6a-0262-4e4c-abc0-fb9268d436e2","type":"BoxAnnotation"}},"id":"9b9a757a-d9cf-40a4-973b-458c6a0c13ee","type":"BoxZoomTool"},{"attributes":{},"id":"1ff45828-74c9-4102-b700-d5d4122173d9","type":"HelpTool"},{"attributes":{},"id":"99fc8ee3-351f-4200-8938-ebd28b0c5ece","type":"SaveTool"},{"attributes":{"plot":{"id":"c8c53eef-79d7-41ac-8a54-a69dee4cdab0","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ad3b1b6-7dbc-4338-b302-de20d4812658","type":"BasicTicker"}},"id":"276196a8-1252-4dd2-b1c5-27607a318b68","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"cda292fe-841e-45f0-8080-44b7f494c57f","type":"Title"},{"attributes":{},"id":"ad879e8b-23f2-470c-99b2-5b39580b55c1","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9862fb6a-0262-4e4c-abc0-fb9268d436e2","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"35227b2f-a817-4884-9240-bffda69467df","type":"ColumnDataSource"},"glyph":{"id":"876dd567-1203-4bf0-b1c4-d7ea0dec96b5","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bf98bb4e-0885-48e4-abb1-b2777087aca7","type":"Wedge"},"selection_glyph":null,"view":{"id":"7cbcd91a-2fc1-494a-a755-ea52ecfdddfb","type":"CDSView"}},"id":"0fe2b26e-3ceb-4768-91f2-5e676391bdc4","type":"GlyphRenderer"}],"root_ids":["c8c53eef-79d7-41ac-8a54-a69dee4cdab0"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"d53b1593-1038-4297-a87d-9eafe8721e56","elementid":"b402ea84-e2ca-4626-b38f-a7f903f37433","modelid":"c8c53eef-79d7-41ac-8a54-a69dee4cdab0"}];
                
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
