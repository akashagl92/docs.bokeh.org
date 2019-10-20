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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("53ed5596-2d42-4386-8d5f-d4b83fc6b9e0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '53ed5596-2d42-4386-8d5f-d4b83fc6b9e0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"6246b92d-3768-45d3-b891-199fbb868488":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"df9f3ff3-7ffb-4789-813b-ce7b4ca4a264","type":"InvertedTriangle"},{"attributes":{"plot":{"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"}},"id":"00db8319-c921-45e4-9fab-b26714a3e8cf","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5b138b12-a309-476e-ad08-baaa10fce6ac","type":"BoxAnnotation"},{"attributes":{},"id":"de7883ac-b8a7-4a8e-abc6-1920a61ee4a6","type":"BasicTickFormatter"},{"attributes":{},"id":"d20e8599-2154-4060-a7b8-47d23e6a1b8b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"}},"id":"36e42e0d-0444-4a94-a77b-30a1fb7a427f","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7cbfc2fb-6863-4179-8edc-aa33a3bc5252","type":"InvertedTriangle"},{"attributes":{"formatter":{"id":"de7883ac-b8a7-4a8e-abc6-1920a61ee4a6","type":"BasicTickFormatter"},"plot":{"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ab116aa-74fd-4cbd-a64e-65493f75e094","type":"BasicTicker"}},"id":"b135a3f0-4439-4ee1-8c00-a8c3a667df66","type":"LinearAxis"},{"attributes":{"below":[{"id":"f4a16974-f309-43c8-b51a-fdb4747bcb8f","type":"LinearAxis"}],"left":[{"id":"b135a3f0-4439-4ee1-8c00-a8c3a667df66","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f4a16974-f309-43c8-b51a-fdb4747bcb8f","type":"LinearAxis"},{"id":"1b2c965a-b7c8-4c74-8f59-67a34e03c44b","type":"Grid"},{"id":"b135a3f0-4439-4ee1-8c00-a8c3a667df66","type":"LinearAxis"},{"id":"f9f90a5f-13f7-49e4-ab24-a7148d282d6e","type":"Grid"},{"id":"5b138b12-a309-476e-ad08-baaa10fce6ac","type":"BoxAnnotation"},{"id":"c3fcce10-e8ae-4d03-8326-f925dff5872c","type":"GlyphRenderer"}],"title":{"id":"64872445-f669-4042-a3c3-91084a43b08d","type":"Title"},"tool_events":{"id":"bdfc95d6-cbaa-426f-a506-7f4086423fc5","type":"ToolEvents"},"toolbar":{"id":"b58912bb-51bd-4a09-a336-aaad955c5f3d","type":"Toolbar"},"x_range":{"id":"12b55e34-a5f7-4e7a-bd89-7135ecbab9fb","type":"DataRange1d"},"x_scale":{"id":"835ca0a0-c4c0-401b-9ef5-4974e5abd4a2","type":"LinearScale"},"y_range":{"id":"83dcfb8d-0ed1-49ad-85bb-1a9a0b5d6a7c","type":"DataRange1d"},"y_scale":{"id":"150cf030-bee2-46ae-b7c2-5d17b2f32ae4","type":"LinearScale"}},"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"835ca0a0-c4c0-401b-9ef5-4974e5abd4a2","type":"LinearScale"},{"attributes":{"plot":{"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"245e95e4-9f1c-42e3-8bf3-3880953406af","type":"BasicTicker"}},"id":"1b2c965a-b7c8-4c74-8f59-67a34e03c44b","type":"Grid"},{"attributes":{"plot":{"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"}},"id":"3ad56f6a-3ee4-463f-8bf4-e2a6496004a9","type":"PanTool"},{"attributes":{"plot":{"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"}},"id":"c5c75947-6bbb-4628-817c-a34c5a7a66d3","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ab116aa-74fd-4cbd-a64e-65493f75e094","type":"BasicTicker"}},"id":"f9f90a5f-13f7-49e4-ab24-a7148d282d6e","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3ad56f6a-3ee4-463f-8bf4-e2a6496004a9","type":"PanTool"},{"id":"00db8319-c921-45e4-9fab-b26714a3e8cf","type":"WheelZoomTool"},{"id":"45842bf5-0a55-47d9-b737-ac30c274d999","type":"BoxZoomTool"},{"id":"429b7f68-d4a0-44c4-a444-6e78024a90fa","type":"SaveTool"},{"id":"c5c75947-6bbb-4628-817c-a34c5a7a66d3","type":"ResetTool"},{"id":"36e42e0d-0444-4a94-a77b-30a1fb7a427f","type":"HelpTool"}]},"id":"b58912bb-51bd-4a09-a336-aaad955c5f3d","type":"Toolbar"},{"attributes":{},"id":"5ab116aa-74fd-4cbd-a64e-65493f75e094","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d20e8599-2154-4060-a7b8-47d23e6a1b8b","type":"BasicTickFormatter"},"plot":{"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"245e95e4-9f1c-42e3-8bf3-3880953406af","type":"BasicTicker"}},"id":"f4a16974-f309-43c8-b51a-fdb4747bcb8f","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"64872445-f669-4042-a3c3-91084a43b08d","type":"Title"},{"attributes":{"data_source":{"id":"dd68f7b4-ac4f-47a1-a522-2c4e8b8c746e","type":"ColumnDataSource"},"glyph":{"id":"7cbfc2fb-6863-4179-8edc-aa33a3bc5252","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"df9f3ff3-7ffb-4789-813b-ce7b4ca4a264","type":"InvertedTriangle"},"selection_glyph":null},"id":"c3fcce10-e8ae-4d03-8326-f925dff5872c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"dd68f7b4-ac4f-47a1-a522-2c4e8b8c746e","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"5b138b12-a309-476e-ad08-baaa10fce6ac","type":"BoxAnnotation"},"plot":{"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"}},"id":"45842bf5-0a55-47d9-b737-ac30c274d999","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"83dcfb8d-0ed1-49ad-85bb-1a9a0b5d6a7c","type":"DataRange1d"},{"attributes":{},"id":"245e95e4-9f1c-42e3-8bf3-3880953406af","type":"BasicTicker"},{"attributes":{},"id":"150cf030-bee2-46ae-b7c2-5d17b2f32ae4","type":"LinearScale"},{"attributes":{},"id":"bdfc95d6-cbaa-426f-a506-7f4086423fc5","type":"ToolEvents"},{"attributes":{"plot":{"id":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1","subtype":"Figure","type":"Plot"}},"id":"429b7f68-d4a0-44c4-a444-6e78024a90fa","type":"SaveTool"},{"attributes":{"callback":null},"id":"12b55e34-a5f7-4e7a-bd89-7135ecbab9fb","type":"DataRange1d"}],"root_ids":["8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"6246b92d-3768-45d3-b891-199fbb868488","elementid":"53ed5596-2d42-4386-8d5f-d4b83fc6b9e0","modelid":"8fc550ba-dbb8-4cdb-bc68-f17c72f71bf1"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
