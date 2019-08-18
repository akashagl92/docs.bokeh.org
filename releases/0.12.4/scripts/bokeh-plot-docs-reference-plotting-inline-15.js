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
      };var element = document.getElementById("0916cd79-3de3-48a9-8f0d-ca333d334f5b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0916cd79-3de3-48a9-8f0d-ca333d334f5b' but no matching script tag was found. ")
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
                var docs_json = {"26db6205-c7a3-4e0e-ba19-d69f574e7d48":{"roots":{"references":[{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"c271eb5e-ffaf-4b92-b610-0ed8654b8d94","type":"Patches"},{"attributes":{},"id":"44b39f9a-223b-4e60-886f-1bf38d53dbdc","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d769cb84-e392-4d21-baec-f2d35d0c4066","type":"DataRange1d"},{"attributes":{"plot":{"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"}},"id":"49d85d98-11d0-490f-b0dd-86bbd31eee68","type":"SaveTool"},{"attributes":{"callback":null},"id":"af7b8358-aadf-4589-a31d-e66416f681e9","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9c6e876c-a9e1-4ae5-8e8a-ccccee333038","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"e97dbdae-2d9d-406f-bb15-e35804332e9a","type":"Title"},{"attributes":{"overlay":{"id":"9c6e876c-a9e1-4ae5-8e8a-ccccee333038","type":"BoxAnnotation"},"plot":{"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"}},"id":"51fb0147-7f7b-49ab-93ef-0cac9db609b4","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"}},"id":"6f2b15a6-3f4a-49e6-9d50-6cc0c8220bc8","type":"HelpTool"},{"attributes":{"plot":{"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"}},"id":"7ce8b6dc-812b-4604-91be-1075a1336629","type":"PanTool"},{"attributes":{},"id":"9fbdfa88-d76d-4e59-bfc1-dc4e4a7db050","type":"BasicTicker"},{"attributes":{},"id":"a7437e95-ab47-454f-a1ba-cf509cbe9076","type":"ToolEvents"},{"attributes":{"plot":{"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"}},"id":"6e95e066-86a0-46c8-a252-69c0762790bb","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color","fill_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"958a00d9-550a-4e29-b9e1-cb88e6666d6d","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"},"ticker":{"id":"9fbdfa88-d76d-4e59-bfc1-dc4e4a7db050","type":"BasicTicker"}},"id":"fb272544-5349-4c73-bc9a-ec267b9bdc08","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"8566e4ce-4d9a-4031-a74b-811af6fdee03","type":"Patches"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7ce8b6dc-812b-4604-91be-1075a1336629","type":"PanTool"},{"id":"194a8e40-3ba3-4403-a791-9702cffb3626","type":"WheelZoomTool"},{"id":"51fb0147-7f7b-49ab-93ef-0cac9db609b4","type":"BoxZoomTool"},{"id":"49d85d98-11d0-490f-b0dd-86bbd31eee68","type":"SaveTool"},{"id":"6e95e066-86a0-46c8-a252-69c0762790bb","type":"ResetTool"},{"id":"6f2b15a6-3f4a-49e6-9d50-6cc0c8220bc8","type":"HelpTool"}]},"id":"ccbd9a6b-bae0-4957-acda-004c1a654815","type":"Toolbar"},{"attributes":{"formatter":{"id":"f5101168-d533-4db0-8840-b89d61044e10","type":"BasicTickFormatter"},"plot":{"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"},"ticker":{"id":"9fbdfa88-d76d-4e59-bfc1-dc4e4a7db050","type":"BasicTicker"}},"id":"39585550-b3bc-48ff-8511-7ec2de818f13","type":"LinearAxis"},{"attributes":{"plot":{"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b284196-5aef-4c79-ab15-a64eab39188f","type":"BasicTicker"}},"id":"f2dbe148-234e-45fa-9ab5-368e4df34878","type":"Grid"},{"attributes":{"data_source":{"id":"958a00d9-550a-4e29-b9e1-cb88e6666d6d","type":"ColumnDataSource"},"glyph":{"id":"c271eb5e-ffaf-4b92-b610-0ed8654b8d94","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"8566e4ce-4d9a-4031-a74b-811af6fdee03","type":"Patches"},"selection_glyph":null},"id":"245d51cf-c4ac-4be7-9813-804ffbc8fbe4","type":"GlyphRenderer"},{"attributes":{},"id":"3b284196-5aef-4c79-ab15-a64eab39188f","type":"BasicTicker"},{"attributes":{"formatter":{"id":"44b39f9a-223b-4e60-886f-1bf38d53dbdc","type":"BasicTickFormatter"},"plot":{"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b284196-5aef-4c79-ab15-a64eab39188f","type":"BasicTicker"}},"id":"c12e6988-4012-4ade-aa77-4cc41da48969","type":"LinearAxis"},{"attributes":{"plot":{"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"}},"id":"194a8e40-3ba3-4403-a791-9702cffb3626","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"c12e6988-4012-4ade-aa77-4cc41da48969","type":"LinearAxis"}],"left":[{"id":"39585550-b3bc-48ff-8511-7ec2de818f13","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c12e6988-4012-4ade-aa77-4cc41da48969","type":"LinearAxis"},{"id":"f2dbe148-234e-45fa-9ab5-368e4df34878","type":"Grid"},{"id":"39585550-b3bc-48ff-8511-7ec2de818f13","type":"LinearAxis"},{"id":"fb272544-5349-4c73-bc9a-ec267b9bdc08","type":"Grid"},{"id":"9c6e876c-a9e1-4ae5-8e8a-ccccee333038","type":"BoxAnnotation"},{"id":"245d51cf-c4ac-4be7-9813-804ffbc8fbe4","type":"GlyphRenderer"}],"title":{"id":"e97dbdae-2d9d-406f-bb15-e35804332e9a","type":"Title"},"tool_events":{"id":"a7437e95-ab47-454f-a1ba-cf509cbe9076","type":"ToolEvents"},"toolbar":{"id":"ccbd9a6b-bae0-4957-acda-004c1a654815","type":"Toolbar"},"x_range":{"id":"d769cb84-e392-4d21-baec-f2d35d0c4066","type":"DataRange1d"},"y_range":{"id":"af7b8358-aadf-4589-a31d-e66416f681e9","type":"DataRange1d"}},"id":"2ed8f940-2c73-410c-977e-371c1d081ffc","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f5101168-d533-4db0-8840-b89d61044e10","type":"BasicTickFormatter"}],"root_ids":["2ed8f940-2c73-410c-977e-371c1d081ffc"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"26db6205-c7a3-4e0e-ba19-d69f574e7d48","elementid":"0916cd79-3de3-48a9-8f0d-ca333d334f5b","modelid":"2ed8f940-2c73-410c-977e-371c1d081ffc"}];
                
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
