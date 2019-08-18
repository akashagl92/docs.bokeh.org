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
      };var element = document.getElementById("ca418899-741a-4d85-8616-15557e93d656");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca418899-741a-4d85-8616-15557e93d656' but no matching script tag was found. ")
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
                var docs_json = {"98f7c72c-5937-4669-be32-3ef96b393875":{"roots":{"references":[{"attributes":{},"id":"158f9bdf-a7c3-4972-aac1-598f4a3ac7b5","type":"HelpTool"},{"attributes":{"plot":{"id":"e659ea64-58fd-4974-9703-194437fc7b97","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9f40f21-99d3-4650-b7b4-bb620240f7e9","type":"BasicTicker"}},"id":"c549186e-ed18-43d4-8532-9f402563e847","type":"Grid"},{"attributes":{"source":{"id":"b00dc79a-a458-4898-9555-d8f0f173a740","type":"ColumnDataSource"}},"id":"615c8265-c723-4001-b8f0-f49741f9e4ec","type":"CDSView"},{"attributes":{},"id":"55f959bf-9670-4b2d-a985-3183b0bf06b9","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4717e05-32b7-4bcf-b9f3-2cf40cafbbb8","type":"CircleCross"},{"attributes":{},"id":"d9f40f21-99d3-4650-b7b4-bb620240f7e9","type":"BasicTicker"},{"attributes":{"callback":null},"id":"18a884e4-9228-44fb-9ea6-ce35d7178031","type":"DataRange1d"},{"attributes":{"overlay":{"id":"7b59ee0f-c109-4e93-a580-9b4d4c476de3","type":"BoxAnnotation"}},"id":"94c5bb9b-892f-4a47-b0b0-d5f989beae49","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"3cceaa55-16af-4274-9490-2240bfb84505","type":"BasicTickFormatter"},"plot":{"id":"e659ea64-58fd-4974-9703-194437fc7b97","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9f40f21-99d3-4650-b7b4-bb620240f7e9","type":"BasicTicker"}},"id":"b25a35cf-2701-4ecb-915d-14299ca6f5d8","type":"LinearAxis"},{"attributes":{},"id":"3cceaa55-16af-4274-9490-2240bfb84505","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"aab7b803-f668-4dd0-a641-473bf955f117","type":"CircleCross"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e02304c6-9d89-46c5-9da2-8d000dc02c61","type":"PanTool"},{"id":"af4dd287-dd9d-49c6-848a-e84b1a945187","type":"WheelZoomTool"},{"id":"94c5bb9b-892f-4a47-b0b0-d5f989beae49","type":"BoxZoomTool"},{"id":"61e0063c-1916-484b-87df-51c73cae1341","type":"SaveTool"},{"id":"4920e425-4722-4f37-a1d4-a1e43fd1a1c2","type":"ResetTool"},{"id":"158f9bdf-a7c3-4972-aac1-598f4a3ac7b5","type":"HelpTool"}]},"id":"5b1287cc-39b6-4b51-b4d8-faa4ea58feb0","type":"Toolbar"},{"attributes":{"data_source":{"id":"b00dc79a-a458-4898-9555-d8f0f173a740","type":"ColumnDataSource"},"glyph":{"id":"aab7b803-f668-4dd0-a641-473bf955f117","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c4717e05-32b7-4bcf-b9f3-2cf40cafbbb8","type":"CircleCross"},"selection_glyph":null,"view":{"id":"615c8265-c723-4001-b8f0-f49741f9e4ec","type":"CDSView"}},"id":"6875c5f3-5c06-4ec3-96e5-dbb58b0c7681","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"e659ea64-58fd-4974-9703-194437fc7b97","subtype":"Figure","type":"Plot"},"ticker":{"id":"af561aae-e670-4452-8c3b-5042f3a1e878","type":"BasicTicker"}},"id":"f1a00037-ffd9-440b-8fb4-963f3e3f604e","type":"Grid"},{"attributes":{},"id":"af4dd287-dd9d-49c6-848a-e84b1a945187","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"4c5c3a82-3754-4bc2-9ca0-9337a8047058","type":"BasicTickFormatter"},"plot":{"id":"e659ea64-58fd-4974-9703-194437fc7b97","subtype":"Figure","type":"Plot"},"ticker":{"id":"af561aae-e670-4452-8c3b-5042f3a1e878","type":"BasicTicker"}},"id":"76e5026b-43e5-49f0-a095-57b8fa04f3a7","type":"LinearAxis"},{"attributes":{},"id":"790a81b5-6251-4e1f-a58b-fb441e5b8382","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"4e52784a-4930-4bbe-8bb4-b5e309a7350c","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7b59ee0f-c109-4e93-a580-9b4d4c476de3","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"b25a35cf-2701-4ecb-915d-14299ca6f5d8","type":"LinearAxis"}],"left":[{"id":"76e5026b-43e5-49f0-a095-57b8fa04f3a7","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b25a35cf-2701-4ecb-915d-14299ca6f5d8","type":"LinearAxis"},{"id":"c549186e-ed18-43d4-8532-9f402563e847","type":"Grid"},{"id":"76e5026b-43e5-49f0-a095-57b8fa04f3a7","type":"LinearAxis"},{"id":"f1a00037-ffd9-440b-8fb4-963f3e3f604e","type":"Grid"},{"id":"7b59ee0f-c109-4e93-a580-9b4d4c476de3","type":"BoxAnnotation"},{"id":"6875c5f3-5c06-4ec3-96e5-dbb58b0c7681","type":"GlyphRenderer"}],"title":{"id":"4e52784a-4930-4bbe-8bb4-b5e309a7350c","type":"Title"},"toolbar":{"id":"5b1287cc-39b6-4b51-b4d8-faa4ea58feb0","type":"Toolbar"},"x_range":{"id":"18a884e4-9228-44fb-9ea6-ce35d7178031","type":"DataRange1d"},"x_scale":{"id":"55f959bf-9670-4b2d-a985-3183b0bf06b9","type":"LinearScale"},"y_range":{"id":"cfec35fc-b276-4b1e-be9e-9f6737fbe186","type":"DataRange1d"},"y_scale":{"id":"790a81b5-6251-4e1f-a58b-fb441e5b8382","type":"LinearScale"}},"id":"e659ea64-58fd-4974-9703-194437fc7b97","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e02304c6-9d89-46c5-9da2-8d000dc02c61","type":"PanTool"},{"attributes":{},"id":"61e0063c-1916-484b-87df-51c73cae1341","type":"SaveTool"},{"attributes":{"callback":null},"id":"cfec35fc-b276-4b1e-be9e-9f6737fbe186","type":"DataRange1d"},{"attributes":{},"id":"4920e425-4722-4f37-a1d4-a1e43fd1a1c2","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"b00dc79a-a458-4898-9555-d8f0f173a740","type":"ColumnDataSource"},{"attributes":{},"id":"af561aae-e670-4452-8c3b-5042f3a1e878","type":"BasicTicker"},{"attributes":{},"id":"4c5c3a82-3754-4bc2-9ca0-9337a8047058","type":"BasicTickFormatter"}],"root_ids":["e659ea64-58fd-4974-9703-194437fc7b97"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"98f7c72c-5937-4669-be32-3ef96b393875","elementid":"ca418899-741a-4d85-8616-15557e93d656","modelid":"e659ea64-58fd-4974-9703-194437fc7b97"}];
                
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
