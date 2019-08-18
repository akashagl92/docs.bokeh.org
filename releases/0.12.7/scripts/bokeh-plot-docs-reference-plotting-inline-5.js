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
      };var element = document.getElementById("8d335ccd-22ea-4df8-8636-9477eae432f8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d335ccd-22ea-4df8-8636-9477eae432f8' but no matching script tag was found. ")
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
                var docs_json = {"ab834027-3652-4569-bba0-8134674547f5":{"roots":{"references":[{"attributes":{},"id":"a33fd32f-fe37-4e36-960e-6f32892636e3","type":"BasicTicker"},{"attributes":{},"id":"711aecf1-4139-470e-af62-914f97434dbe","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"11c54c5b-975c-4560-a4ac-3e9e29bb2f02","type":"LinearAxis"}],"left":[{"id":"e8c24ca5-ce7c-4616-9a3d-c82095f59871","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"11c54c5b-975c-4560-a4ac-3e9e29bb2f02","type":"LinearAxis"},{"id":"b29678dd-01f4-4666-8159-107d1a693f2e","type":"Grid"},{"id":"e8c24ca5-ce7c-4616-9a3d-c82095f59871","type":"LinearAxis"},{"id":"9e17979e-4e2c-42ef-af2f-153030aefb78","type":"Grid"},{"id":"d02eada9-b875-44f9-8b15-8a0f136563bc","type":"BoxAnnotation"},{"id":"1dcbd673-e7f9-4957-ace9-2b7fa09f3a5b","type":"GlyphRenderer"}],"title":{"id":"54ce89d6-026b-43cf-a6c1-e4f4e9a7d06e","type":"Title"},"toolbar":{"id":"49b3cc68-208a-44d6-8634-7aa27aebaa07","type":"Toolbar"},"x_range":{"id":"9a274d55-874e-4109-bdc3-631b36d35895","type":"DataRange1d"},"x_scale":{"id":"1e4e15df-0d3c-41a7-9961-06e0ff924c75","type":"LinearScale"},"y_range":{"id":"b6c2f5cd-8007-429d-b467-a4c98658f357","type":"DataRange1d"},"y_scale":{"id":"a56da253-c5bf-444a-a291-c24be8a035a5","type":"LinearScale"}},"id":"b31bebd1-748e-49d4-8377-e6bba543358d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8d90d852-9def-4a4f-98b2-1cf19f847629","type":"SaveTool"},{"attributes":{"callback":null},"id":"b6c2f5cd-8007-429d-b467-a4c98658f357","type":"DataRange1d"},{"attributes":{},"id":"1e4e15df-0d3c-41a7-9961-06e0ff924c75","type":"LinearScale"},{"attributes":{"overlay":{"id":"d02eada9-b875-44f9-8b15-8a0f136563bc","type":"BoxAnnotation"}},"id":"71fdd68a-0f78-4e33-b7d6-715a80579b34","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d02eada9-b875-44f9-8b15-8a0f136563bc","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"beb9cd5b-1df5-4c6f-8f05-f7b0302d2670","type":"PanTool"},{"id":"553ac732-0af5-40dc-b494-7b9737df414a","type":"WheelZoomTool"},{"id":"71fdd68a-0f78-4e33-b7d6-715a80579b34","type":"BoxZoomTool"},{"id":"8d90d852-9def-4a4f-98b2-1cf19f847629","type":"SaveTool"},{"id":"68e4197d-1c8d-4fc3-8c6e-da492d97cbdb","type":"ResetTool"},{"id":"75d8e5c7-b35c-408c-aa75-aeb787f9205f","type":"HelpTool"}]},"id":"49b3cc68-208a-44d6-8634-7aa27aebaa07","type":"Toolbar"},{"attributes":{},"id":"d7ddb887-7baa-43ca-9dd0-548fe0e54567","type":"BasicTicker"},{"attributes":{},"id":"75d8e5c7-b35c-408c-aa75-aeb787f9205f","type":"HelpTool"},{"attributes":{"plot":{"id":"b31bebd1-748e-49d4-8377-e6bba543358d","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7ddb887-7baa-43ca-9dd0-548fe0e54567","type":"BasicTicker"}},"id":"b29678dd-01f4-4666-8159-107d1a693f2e","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"98dd69c7-8d44-4e10-a0ea-62887ac8fd83","type":"ColumnDataSource"},{"attributes":{"source":{"id":"98dd69c7-8d44-4e10-a0ea-62887ac8fd83","type":"ColumnDataSource"}},"id":"050720cf-36a5-4589-980d-43915524afd4","type":"CDSView"},{"attributes":{},"id":"bf183bb4-6adb-43f5-8029-88fd5285f74d","type":"BasicTickFormatter"},{"attributes":{},"id":"beb9cd5b-1df5-4c6f-8f05-f7b0302d2670","type":"PanTool"},{"attributes":{"data_source":{"id":"98dd69c7-8d44-4e10-a0ea-62887ac8fd83","type":"ColumnDataSource"},"glyph":{"id":"a4c072ff-59a5-403d-bccc-1ead5af274cd","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2760b9bc-e09e-487a-bb8c-9a6109c90b10","type":"Cross"},"selection_glyph":null,"view":{"id":"050720cf-36a5-4589-980d-43915524afd4","type":"CDSView"}},"id":"1dcbd673-e7f9-4957-ace9-2b7fa09f3a5b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"9a274d55-874e-4109-bdc3-631b36d35895","type":"DataRange1d"},{"attributes":{},"id":"553ac732-0af5-40dc-b494-7b9737df414a","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"54ce89d6-026b-43cf-a6c1-e4f4e9a7d06e","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"2760b9bc-e09e-487a-bb8c-9a6109c90b10","type":"Cross"},{"attributes":{"formatter":{"id":"bf183bb4-6adb-43f5-8029-88fd5285f74d","type":"BasicTickFormatter"},"plot":{"id":"b31bebd1-748e-49d4-8377-e6bba543358d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a33fd32f-fe37-4e36-960e-6f32892636e3","type":"BasicTicker"}},"id":"e8c24ca5-ce7c-4616-9a3d-c82095f59871","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"b31bebd1-748e-49d4-8377-e6bba543358d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a33fd32f-fe37-4e36-960e-6f32892636e3","type":"BasicTicker"}},"id":"9e17979e-4e2c-42ef-af2f-153030aefb78","type":"Grid"},{"attributes":{},"id":"68e4197d-1c8d-4fc3-8c6e-da492d97cbdb","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4c072ff-59a5-403d-bccc-1ead5af274cd","type":"Cross"},{"attributes":{},"id":"a56da253-c5bf-444a-a291-c24be8a035a5","type":"LinearScale"},{"attributes":{"formatter":{"id":"711aecf1-4139-470e-af62-914f97434dbe","type":"BasicTickFormatter"},"plot":{"id":"b31bebd1-748e-49d4-8377-e6bba543358d","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7ddb887-7baa-43ca-9dd0-548fe0e54567","type":"BasicTicker"}},"id":"11c54c5b-975c-4560-a4ac-3e9e29bb2f02","type":"LinearAxis"}],"root_ids":["b31bebd1-748e-49d4-8377-e6bba543358d"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"ab834027-3652-4569-bba0-8134674547f5","elementid":"8d335ccd-22ea-4df8-8636-9477eae432f8","modelid":"b31bebd1-748e-49d4-8377-e6bba543358d"}];
                
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
