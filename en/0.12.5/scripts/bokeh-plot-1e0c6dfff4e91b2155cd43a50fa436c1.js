(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("349194d3-ee50-4cae-9fbf-057a4327619f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '349194d3-ee50-4cae-9fbf-057a4327619f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"313e00c0-689c-4df0-aa57-0b34d42f0e39":{"roots":{"references":[{"attributes":{},"id":"0144174a-474f-4657-9ad7-d2e0fe24f484","type":"ToolEvents"},{"attributes":{"plot":{"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"}},"id":"496713eb-9806-4894-9fcf-c6879d36094b","type":"PanTool"},{"attributes":{},"id":"18d392d4-cb52-4415-a72c-974ed1055e33","type":"BasicTicker"},{"attributes":{"plot":{"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"}},"id":"71be462f-30d5-43c5-9cd9-b0d2ba0a0e5b","type":"SaveTool"},{"attributes":{"data_source":{"id":"15fabd1c-c32a-4b60-a750-57c92300788b","type":"ColumnDataSource"},"glyph":{"id":"fdba5e94-b4d2-4483-a3b5-48e09549a6e1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82e28268-d4de-4fb5-b156-ff436ccd1471","type":"Circle"},"selection_glyph":null},"id":"bc1dfcdf-48b3-4cd5-b7f0-92ed0d5b22fb","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"7de3b9a6-dd3c-4f25-8799-a4e27c9f4b39","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fdba5e94-b4d2-4483-a3b5-48e09549a6e1","type":"Circle"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"ec7283b5-2c4b-402c-ae47-348af14eed7b","type":"BasicTicker"}},"id":"67505ff1-83ff-4d52-9e84-eb8d8e4f8ee2","type":"Grid"},{"attributes":{"formatter":{"id":"43f7cda3-1b37-4d8a-bdb5-e7677b5d6013","type":"BasicTickFormatter"},"plot":{"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"ec7283b5-2c4b-402c-ae47-348af14eed7b","type":"BasicTicker"}},"id":"c08ad584-88c5-4e47-8176-732da3654474","type":"LinearAxis"},{"attributes":{"overlay":{"id":"37936616-a2de-42b0-8a66-dd07c49d95fc","type":"BoxAnnotation"},"plot":{"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"}},"id":"1067b220-1134-482a-b91c-e7f009277908","type":"BoxZoomTool"},{"attributes":{},"id":"ec7283b5-2c4b-402c-ae47-348af14eed7b","type":"BasicTicker"},{"attributes":{"plot":{"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"}},"id":"a3a401ab-d1b5-492a-add1-43350b139dcd","type":"HelpTool"},{"attributes":{"callback":null},"id":"6179360d-b98a-4b6a-8f6c-e679c37ebaa7","type":"DataRange1d"},{"attributes":{"below":[{"id":"f1b26130-aca6-40e4-a0ac-e0f853bfe713","type":"LinearAxis"}],"left":[{"id":"c08ad584-88c5-4e47-8176-732da3654474","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f1b26130-aca6-40e4-a0ac-e0f853bfe713","type":"LinearAxis"},{"id":"8850d723-7b76-4267-9a8a-10a15e87b367","type":"Grid"},{"id":"c08ad584-88c5-4e47-8176-732da3654474","type":"LinearAxis"},{"id":"67505ff1-83ff-4d52-9e84-eb8d8e4f8ee2","type":"Grid"},{"id":"37936616-a2de-42b0-8a66-dd07c49d95fc","type":"BoxAnnotation"},{"id":"bc1dfcdf-48b3-4cd5-b7f0-92ed0d5b22fb","type":"GlyphRenderer"}],"title":{"id":"7de3b9a6-dd3c-4f25-8799-a4e27c9f4b39","type":"Title"},"tool_events":{"id":"0144174a-474f-4657-9ad7-d2e0fe24f484","type":"ToolEvents"},"toolbar":{"id":"3c5fc7ce-163f-420d-b0d0-3bf1db3e43c8","type":"Toolbar"},"x_range":{"id":"6179360d-b98a-4b6a-8f6c-e679c37ebaa7","type":"DataRange1d"},"y_range":{"id":"fddb269f-fa33-42d5-ab59-6772387276f4","type":"DataRange1d"}},"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"}},"id":"5876e459-32fe-4fa7-b39a-58f3e27bc12f","type":"ResetTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"18d392d4-cb52-4415-a72c-974ed1055e33","type":"BasicTicker"}},"id":"8850d723-7b76-4267-9a8a-10a15e87b367","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"82e28268-d4de-4fb5-b156-ff436ccd1471","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37936616-a2de-42b0-8a66-dd07c49d95fc","type":"BoxAnnotation"},{"attributes":{},"id":"43f7cda3-1b37-4d8a-bdb5-e7677b5d6013","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b97eec75-a9bb-4751-9b8e-57730d85ea8c","type":"BasicTickFormatter"},"plot":{"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"18d392d4-cb52-4415-a72c-974ed1055e33","type":"BasicTicker"}},"id":"f1b26130-aca6-40e4-a0ac-e0f853bfe713","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"15fabd1c-c32a-4b60-a750-57c92300788b","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"496713eb-9806-4894-9fcf-c6879d36094b","type":"PanTool"},{"id":"e67c5938-7290-4dbd-a7ac-7e3698fb4fd9","type":"WheelZoomTool"},{"id":"1067b220-1134-482a-b91c-e7f009277908","type":"BoxZoomTool"},{"id":"71be462f-30d5-43c5-9cd9-b0d2ba0a0e5b","type":"SaveTool"},{"id":"5876e459-32fe-4fa7-b39a-58f3e27bc12f","type":"ResetTool"},{"id":"a3a401ab-d1b5-492a-add1-43350b139dcd","type":"HelpTool"}]},"id":"3c5fc7ce-163f-420d-b0d0-3bf1db3e43c8","type":"Toolbar"},{"attributes":{},"id":"b97eec75-a9bb-4751-9b8e-57730d85ea8c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"11735245-dec4-4718-ac6e-c42a1fd7a1cc","subtype":"Figure","type":"Plot"}},"id":"e67c5938-7290-4dbd-a7ac-7e3698fb4fd9","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"fddb269f-fa33-42d5-ab59-6772387276f4","type":"DataRange1d"}],"root_ids":["11735245-dec4-4718-ac6e-c42a1fd7a1cc"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"313e00c0-689c-4df0-aa57-0b34d42f0e39","elementid":"349194d3-ee50-4cae-9fbf-057a4327619f","modelid":"11735245-dec4-4718-ac6e-c42a1fd7a1cc"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
