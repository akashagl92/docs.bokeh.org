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
      };var element = document.getElementById("342c8540-0505-4855-acc0-08e7d4eedd21");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '342c8540-0505-4855-acc0-08e7d4eedd21' but no matching script tag was found. ")
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
                var docs_json = {"4e066854-6d84-4896-92b0-c4aae65f59c4":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9ca266dd-bef3-417b-a74f-3329854cc41a","type":"BoxAnnotation"},{"attributes":{},"id":"a04b5570-8135-4e18-9d70-341485b46202","type":"ToolEvents"},{"attributes":{},"id":"b8e1a1b3-5679-4b7a-b15b-947fb6e15d96","type":"LinearScale"},{"attributes":{"overlay":{"id":"9ca266dd-bef3-417b-a74f-3329854cc41a","type":"BoxAnnotation"},"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"}},"id":"303a1258-359c-4a91-898b-635272a23a15","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"094bad5e-6230-48e8-b48c-ef58fd1e4e09","type":"NormalHead"},{"attributes":{"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"}},"id":"e77467a1-e6fb-4042-8b31-142959ec0b78","type":"SaveTool"},{"attributes":{},"id":"65270de0-67d5-4caa-966c-6ef2233ff652","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"}},"id":"bbe98013-30c8-4c3d-87c8-12990c21a0db","type":"PanTool"},{"attributes":{"below":[{"id":"6d5ec12a-16de-47f7-a45d-82af210c1477","type":"LinearAxis"}],"left":[{"id":"8f4bf53b-e504-4139-a208-8b8ae1870584","type":"LinearAxis"}],"renderers":[{"id":"6d5ec12a-16de-47f7-a45d-82af210c1477","type":"LinearAxis"},{"id":"af14f45f-a19b-4a3d-9505-fb5501637e46","type":"Grid"},{"id":"8f4bf53b-e504-4139-a208-8b8ae1870584","type":"LinearAxis"},{"id":"01715cb8-4418-4ab2-ad81-868d52d58563","type":"Grid"},{"id":"9ca266dd-bef3-417b-a74f-3329854cc41a","type":"BoxAnnotation"},{"id":"4d031098-ef9a-424f-873e-f080104c3ab1","type":"GlyphRenderer"},{"id":"52d4026c-f1d7-4d3e-88e4-3b99e6699dae","type":"Arrow"},{"id":"767e9db5-eb23-487d-aeb7-c64aeeedf16b","type":"Arrow"},{"id":"99fafd83-e59e-4762-97c0-5f233b1bb3af","type":"Arrow"}],"title":{"id":"451666f0-ae41-4033-9215-2ea94d5bba7f","type":"Title"},"tool_events":{"id":"a04b5570-8135-4e18-9d70-341485b46202","type":"ToolEvents"},"toolbar":{"id":"5847bbfd-3fe4-420b-945b-51b3d2b4be69","type":"Toolbar"},"x_range":{"id":"ee418341-95e9-4ed9-a974-e7b439092659","type":"DataRange1d"},"x_scale":{"id":"8a89d802-cf4f-4117-b77f-7a80ae9cb0b9","type":"LinearScale"},"y_range":{"id":"8349d4a1-9eb9-4504-aae6-d483652544b1","type":"DataRange1d"},"y_scale":{"id":"b8e1a1b3-5679-4b7a-b15b-947fb6e15d96","type":"LinearScale"}},"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"}},"id":"07fd6e50-2af5-46e0-87bd-f2ac9444bf57","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","fill_color","line_color"],"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]}},"id":"863a3fa7-6882-4176-9134-1e0b0aafc656","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"}},"id":"422e8a8c-65ad-4f3c-9468-309786a95ac9","type":"ResetTool"},{"attributes":{},"id":"ee395a9c-13d0-44f6-8dab-e07514cd8507","type":"BasicTicker"},{"attributes":{"end":{"id":"094bad5e-6230-48e8-b48c-ef58fd1e4e09","type":"NormalHead"},"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"767e9db5-eb23-487d-aeb7-c64aeeedf16b","type":"Arrow"},{"attributes":{"data_source":{"id":"863a3fa7-6882-4176-9134-1e0b0aafc656","type":"ColumnDataSource"},"glyph":{"id":"9458cab0-d61f-4b6e-8378-fe47d71457f6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cb373259-f81d-4399-8806-412b8cf209d0","type":"Circle"},"selection_glyph":null},"id":"4d031098-ef9a-424f-873e-f080104c3ab1","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"451666f0-ae41-4033-9215-2ea94d5bba7f","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb373259-f81d-4399-8806-412b8cf209d0","type":"Circle"},{"attributes":{},"id":"8a89d802-cf4f-4117-b77f-7a80ae9cb0b9","type":"LinearScale"},{"attributes":{"plot":null,"size":35},"id":"2b732714-eb1e-4889-976d-bcb6ce8aa6bb","type":"VeeHead"},{"attributes":{"formatter":{"id":"65270de0-67d5-4caa-966c-6ef2233ff652","type":"BasicTickFormatter"},"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee395a9c-13d0-44f6-8dab-e07514cd8507","type":"BasicTicker"}},"id":"8f4bf53b-e504-4139-a208-8b8ae1870584","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9458cab0-d61f-4b6e-8378-fe47d71457f6","type":"Circle"},{"attributes":{"callback":null},"id":"ee418341-95e9-4ed9-a974-e7b439092659","type":"DataRange1d"},{"attributes":{"end":{"id":"2b732714-eb1e-4889-976d-bcb6ce8aa6bb","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"99fafd83-e59e-4762-97c0-5f233b1bb3af","type":"Arrow"},{"attributes":{},"id":"fcd13a5e-f1b0-421b-8879-daa3d7c26da0","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bbe98013-30c8-4c3d-87c8-12990c21a0db","type":"PanTool"},{"id":"c400fa7a-d9a9-4b9e-94d6-0c5600daa66f","type":"WheelZoomTool"},{"id":"303a1258-359c-4a91-898b-635272a23a15","type":"BoxZoomTool"},{"id":"e77467a1-e6fb-4042-8b31-142959ec0b78","type":"SaveTool"},{"id":"422e8a8c-65ad-4f3c-9468-309786a95ac9","type":"ResetTool"},{"id":"07fd6e50-2af5-46e0-87bd-f2ac9444bf57","type":"HelpTool"}]},"id":"5847bbfd-3fe4-420b-945b-51b3d2b4be69","type":"Toolbar"},{"attributes":{"end":{"id":"59ba80c3-d383-47c7-a375-b92797a66b8e","type":"OpenHead"},"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"52d4026c-f1d7-4d3e-88e4-3b99e6699dae","type":"Arrow"},{"attributes":{"formatter":{"id":"4a613994-305c-449d-8760-1448a86e4e6e","type":"BasicTickFormatter"},"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"},"ticker":{"id":"fcd13a5e-f1b0-421b-8879-daa3d7c26da0","type":"BasicTicker"}},"id":"6d5ec12a-16de-47f7-a45d-82af210c1477","type":"LinearAxis"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"59ba80c3-d383-47c7-a375-b92797a66b8e","type":"OpenHead"},{"attributes":{"callback":null},"id":"8349d4a1-9eb9-4504-aae6-d483652544b1","type":"DataRange1d"},{"attributes":{"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"},"ticker":{"id":"fcd13a5e-f1b0-421b-8879-daa3d7c26da0","type":"BasicTicker"}},"id":"af14f45f-a19b-4a3d-9505-fb5501637e46","type":"Grid"},{"attributes":{"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"}},"id":"c400fa7a-d9a9-4b9e-94d6-0c5600daa66f","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"1b71a155-fb38-4e89-b711-9dbefd2ffa97","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee395a9c-13d0-44f6-8dab-e07514cd8507","type":"BasicTicker"}},"id":"01715cb8-4418-4ab2-ad81-868d52d58563","type":"Grid"},{"attributes":{},"id":"4a613994-305c-449d-8760-1448a86e4e6e","type":"BasicTickFormatter"}],"root_ids":["1b71a155-fb38-4e89-b711-9dbefd2ffa97"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"4e066854-6d84-4896-92b0-c4aae65f59c4","elementid":"342c8540-0505-4855-acc0-08e7d4eedd21","modelid":"1b71a155-fb38-4e89-b711-9dbefd2ffa97"}];
                
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
