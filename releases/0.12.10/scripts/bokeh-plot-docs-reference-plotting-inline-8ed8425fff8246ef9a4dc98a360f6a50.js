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
      };var element = document.getElementById("cc9b68ff-dd58-4e83-916a-c555623e44d6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc9b68ff-dd58-4e83-916a-c555623e44d6' but no matching script tag was found. ")
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
                    var docs_json = {"a474549f-cc89-4356-a22c-cbb8cefa9d0a":{"roots":{"references":[{"attributes":{"callback":null},"id":"a9ad97fc-e205-4b25-8f36-3de0059a9404","type":"DataRange1d"},{"attributes":{"formatter":{"id":"44988141-3403-477c-bd56-24cfd19ed971","type":"BasicTickFormatter"},"plot":{"id":"e21ed5ec-5c19-41e8-a5de-e7d4c26dce0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2c0dc0b-d1ff-49f0-a73d-d86f99cf91d6","type":"BasicTicker"}},"id":"b02c44a3-a713-48ab-bfad-1164b76d988d","type":"LinearAxis"},{"attributes":{},"id":"44988141-3403-477c-bd56-24cfd19ed971","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ea4b0c35-a4ed-457f-bb80-faa552e61660","type":"PanTool"},{"id":"2f93742f-86b1-4cb1-aa92-e2c9fa7230a5","type":"WheelZoomTool"},{"id":"f2ca3364-1135-47df-9209-f68b5b1ffa3e","type":"BoxZoomTool"},{"id":"f1fd4a21-aed7-4c94-a524-54bfea2a5133","type":"SaveTool"},{"id":"3a97088b-f5fe-4572-82ea-ccd2c667f3ec","type":"ResetTool"},{"id":"3ee95020-e70b-4d41-b147-a030093fe0ca","type":"HelpTool"}]},"id":"84076a43-4a0e-4666-adc6-e55afe7bc8b1","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"e21ed5ec-5c19-41e8-a5de-e7d4c26dce0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2c0dc0b-d1ff-49f0-a73d-d86f99cf91d6","type":"BasicTicker"}},"id":"81c6d7b2-3aed-4ee1-8cc9-82afa0616bec","type":"Grid"},{"attributes":{"source":{"id":"0756bd0a-aafd-480b-9da5-9dac69fee4b4","type":"ColumnDataSource"}},"id":"61c0c1ba-57b6-4650-9b1a-05c8ffd4db47","type":"CDSView"},{"attributes":{},"id":"654882ec-924c-4514-9185-17a18a2abf50","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3b1793f6-d27f-452c-b52a-395242b33ba7","type":"BasicTickFormatter"},"plot":{"id":"e21ed5ec-5c19-41e8-a5de-e7d4c26dce0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"654882ec-924c-4514-9185-17a18a2abf50","type":"BasicTicker"}},"id":"26c0108c-9aed-4653-8a80-4e46a7ca2f7d","type":"LinearAxis"},{"attributes":{},"id":"09bb8cb3-bc72-4fca-8431-d5b572c1e914","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"13da8c07-6e99-4f7b-9c8f-4d2d13bdd291","type":"Title"},{"attributes":{"below":[{"id":"26c0108c-9aed-4653-8a80-4e46a7ca2f7d","type":"LinearAxis"}],"left":[{"id":"b02c44a3-a713-48ab-bfad-1164b76d988d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26c0108c-9aed-4653-8a80-4e46a7ca2f7d","type":"LinearAxis"},{"id":"e7512b0a-ae06-43ae-b966-26914d6cd905","type":"Grid"},{"id":"b02c44a3-a713-48ab-bfad-1164b76d988d","type":"LinearAxis"},{"id":"81c6d7b2-3aed-4ee1-8cc9-82afa0616bec","type":"Grid"},{"id":"8de5e8b9-466a-40b5-bb8f-9d3e7b086121","type":"BoxAnnotation"},{"id":"914e1fb3-6001-4de5-8148-16b23b143a37","type":"GlyphRenderer"}],"title":{"id":"13da8c07-6e99-4f7b-9c8f-4d2d13bdd291","type":"Title"},"toolbar":{"id":"84076a43-4a0e-4666-adc6-e55afe7bc8b1","type":"Toolbar"},"x_range":{"id":"10acf090-0c66-436d-b7f8-3a37f4f05a7a","type":"DataRange1d"},"x_scale":{"id":"09bb8cb3-bc72-4fca-8431-d5b572c1e914","type":"LinearScale"},"y_range":{"id":"a9ad97fc-e205-4b25-8f36-3de0059a9404","type":"DataRange1d"},"y_scale":{"id":"7043d395-f209-4c76-9d8b-7b8839633d8f","type":"LinearScale"}},"id":"e21ed5ec-5c19-41e8-a5de-e7d4c26dce0e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3ee95020-e70b-4d41-b147-a030093fe0ca","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"0756bd0a-aafd-480b-9da5-9dac69fee4b4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e21ed5ec-5c19-41e8-a5de-e7d4c26dce0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"654882ec-924c-4514-9185-17a18a2abf50","type":"BasicTicker"}},"id":"e7512b0a-ae06-43ae-b966-26914d6cd905","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8de5e8b9-466a-40b5-bb8f-9d3e7b086121","type":"BoxAnnotation"},{"attributes":{},"id":"2f93742f-86b1-4cb1-aa92-e2c9fa7230a5","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"0756bd0a-aafd-480b-9da5-9dac69fee4b4","type":"ColumnDataSource"},"glyph":{"id":"5e9b48eb-ef03-4530-958d-7b3672792180","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a1af660d-5be1-47b3-ad5b-247c1609321e","type":"CircleX"},"selection_glyph":null,"view":{"id":"61c0c1ba-57b6-4650-9b1a-05c8ffd4db47","type":"CDSView"}},"id":"914e1fb3-6001-4de5-8148-16b23b143a37","type":"GlyphRenderer"},{"attributes":{},"id":"3a97088b-f5fe-4572-82ea-ccd2c667f3ec","type":"ResetTool"},{"attributes":{},"id":"c2c0dc0b-d1ff-49f0-a73d-d86f99cf91d6","type":"BasicTicker"},{"attributes":{},"id":"7043d395-f209-4c76-9d8b-7b8839633d8f","type":"LinearScale"},{"attributes":{},"id":"ea4b0c35-a4ed-457f-bb80-faa552e61660","type":"PanTool"},{"attributes":{},"id":"f1fd4a21-aed7-4c94-a524-54bfea2a5133","type":"SaveTool"},{"attributes":{"overlay":{"id":"8de5e8b9-466a-40b5-bb8f-9d3e7b086121","type":"BoxAnnotation"}},"id":"f2ca3364-1135-47df-9209-f68b5b1ffa3e","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"10acf090-0c66-436d-b7f8-3a37f4f05a7a","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e9b48eb-ef03-4530-958d-7b3672792180","type":"CircleX"},{"attributes":{},"id":"3b1793f6-d27f-452c-b52a-395242b33ba7","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a1af660d-5be1-47b3-ad5b-247c1609321e","type":"CircleX"}],"root_ids":["e21ed5ec-5c19-41e8-a5de-e7d4c26dce0e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a474549f-cc89-4356-a22c-cbb8cefa9d0a","elementid":"cc9b68ff-dd58-4e83-916a-c555623e44d6","modelid":"e21ed5ec-5c19-41e8-a5de-e7d4c26dce0e"}];
                
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
