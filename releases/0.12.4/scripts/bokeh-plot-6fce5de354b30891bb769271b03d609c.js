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
      };var element = document.getElementById("6c1d98c6-08d6-486e-aacb-53f008dddcc7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6c1d98c6-08d6-486e-aacb-53f008dddcc7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"6e25c20e-353b-430c-b089-f06849fecfaf":{"roots":{"references":[{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"4c7dc2c5-2dae-4cb1-85f4-dd7858380ee9","type":"Quad"},{"attributes":{"plot":null,"text":""},"id":"7426fefa-0351-4499-b778-2bb5dad1dab6","type":"Title"},{"attributes":{"formatter":{"id":"3ef2613d-ac5d-47eb-891d-3ee91290c6ab","type":"BasicTickFormatter"},"plot":{"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee95f684-6226-412c-8cf2-8c7d7710b9f1","type":"BasicTicker"}},"id":"0f869063-6d68-4648-9b88-04480043b937","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"76d83347-bd89-410f-86a6-fcd82ece3718","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"}},"id":"bd8571ed-53b6-47c2-826e-9aa233be274a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe655177-2d19-4acc-81b0-87b0a5a8bb58","type":"BasicTicker"}},"id":"1bac1623-4660-43fd-bfb3-9ea279fae49a","type":"Grid"},{"attributes":{"plot":{"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"}},"id":"a53253ac-7ca9-4dcf-878c-67ecd59a5582","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["top","bottom","right","left"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"470eeb26-4680-411e-99a3-4b0658ba601f","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"6e9f0daa-d368-4aa0-bdcd-81ef59085e9f","type":"BasicTickFormatter"},"plot":{"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe655177-2d19-4acc-81b0-87b0a5a8bb58","type":"BasicTicker"}},"id":"13e3ec1b-144a-4917-97b8-5613dec97d42","type":"LinearAxis"},{"attributes":{"below":[{"id":"13e3ec1b-144a-4917-97b8-5613dec97d42","type":"LinearAxis"}],"left":[{"id":"0f869063-6d68-4648-9b88-04480043b937","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13e3ec1b-144a-4917-97b8-5613dec97d42","type":"LinearAxis"},{"id":"1bac1623-4660-43fd-bfb3-9ea279fae49a","type":"Grid"},{"id":"0f869063-6d68-4648-9b88-04480043b937","type":"LinearAxis"},{"id":"0b329eac-d7fa-49a8-b8b7-3d9a69056a8e","type":"Grid"},{"id":"76d83347-bd89-410f-86a6-fcd82ece3718","type":"BoxAnnotation"},{"id":"4ad0624c-cc6b-4297-8cfd-e9f4e22fb2de","type":"GlyphRenderer"}],"title":{"id":"7426fefa-0351-4499-b778-2bb5dad1dab6","type":"Title"},"tool_events":{"id":"c3bf14ac-a6db-43d2-aa90-d192e2f2b653","type":"ToolEvents"},"toolbar":{"id":"f3db8c86-8243-4332-ab40-55fc6e056b8e","type":"Toolbar"},"x_range":{"id":"322a2936-87d6-45fd-a227-ed4d0f3985e9","type":"DataRange1d"},"y_range":{"id":"df4e90d4-9a7d-42ff-827b-cb9d0f6da3af","type":"DataRange1d"}},"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3ef2613d-ac5d-47eb-891d-3ee91290c6ab","type":"BasicTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"d7048ff5-23f5-456d-8a8f-189a39723ca5","type":"Quad"},{"attributes":{},"id":"ee95f684-6226-412c-8cf2-8c7d7710b9f1","type":"BasicTicker"},{"attributes":{"plot":{"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"}},"id":"db01d91b-fe7f-45ee-a995-c1832c25fc19","type":"HelpTool"},{"attributes":{},"id":"c3bf14ac-a6db-43d2-aa90-d192e2f2b653","type":"ToolEvents"},{"attributes":{"callback":null},"id":"df4e90d4-9a7d-42ff-827b-cb9d0f6da3af","type":"DataRange1d"},{"attributes":{},"id":"fe655177-2d19-4acc-81b0-87b0a5a8bb58","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"47f1f877-5b0b-4e7f-86f3-06ce1904aaa4","type":"PanTool"},{"id":"bd8571ed-53b6-47c2-826e-9aa233be274a","type":"WheelZoomTool"},{"id":"5a8a501b-5881-4b5b-80c5-e377756867e1","type":"BoxZoomTool"},{"id":"8ee9e326-7bbe-47bd-9ed9-bdf85f9ebcaf","type":"SaveTool"},{"id":"a53253ac-7ca9-4dcf-878c-67ecd59a5582","type":"ResetTool"},{"id":"db01d91b-fe7f-45ee-a995-c1832c25fc19","type":"HelpTool"}]},"id":"f3db8c86-8243-4332-ab40-55fc6e056b8e","type":"Toolbar"},{"attributes":{"plot":{"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"}},"id":"47f1f877-5b0b-4e7f-86f3-06ce1904aaa4","type":"PanTool"},{"attributes":{"plot":{"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"}},"id":"8ee9e326-7bbe-47bd-9ed9-bdf85f9ebcaf","type":"SaveTool"},{"attributes":{"callback":null},"id":"322a2936-87d6-45fd-a227-ed4d0f3985e9","type":"DataRange1d"},{"attributes":{"overlay":{"id":"76d83347-bd89-410f-86a6-fcd82ece3718","type":"BoxAnnotation"},"plot":{"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"}},"id":"5a8a501b-5881-4b5b-80c5-e377756867e1","type":"BoxZoomTool"},{"attributes":{},"id":"6e9f0daa-d368-4aa0-bdcd-81ef59085e9f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"470eeb26-4680-411e-99a3-4b0658ba601f","type":"ColumnDataSource"},"glyph":{"id":"4c7dc2c5-2dae-4cb1-85f4-dd7858380ee9","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"d7048ff5-23f5-456d-8a8f-189a39723ca5","type":"Quad"},"selection_glyph":null},"id":"4ad0624c-cc6b-4297-8cfd-e9f4e22fb2de","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"ac105eb8-50be-47d8-b772-5084e348debc","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee95f684-6226-412c-8cf2-8c7d7710b9f1","type":"BasicTicker"}},"id":"0b329eac-d7fa-49a8-b8b7-3d9a69056a8e","type":"Grid"}],"root_ids":["ac105eb8-50be-47d8-b772-5084e348debc"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"6e25c20e-353b-430c-b089-f06849fecfaf","elementid":"6c1d98c6-08d6-486e-aacb-53f008dddcc7","modelid":"ac105eb8-50be-47d8-b772-5084e348debc"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
