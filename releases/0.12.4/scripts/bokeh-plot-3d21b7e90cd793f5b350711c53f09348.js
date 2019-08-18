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
      };var element = document.getElementById("7807fd0e-8bbf-47aa-9dc1-11c3d91741eb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7807fd0e-8bbf-47aa-9dc1-11c3d91741eb' but no matching script tag was found. ")
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
                var docs_json = {"dce5c54d-6d4e-4909-9957-c556f1931a79":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eb70b465-53f9-4157-851b-6bc3a79054c8","type":"PanTool"},{"id":"02e94cd2-0282-4614-84d6-829060663e9c","type":"WheelZoomTool"},{"id":"20df3e21-8023-470b-9bed-f8f08e5de2cb","type":"BoxZoomTool"},{"id":"0369ac85-e1b3-4483-8ee8-a51d233bb52a","type":"SaveTool"},{"id":"3f838b75-06ae-4f29-bc24-0bc03583ab2f","type":"ResetTool"},{"id":"527fc40b-737f-4478-8ca6-557c29827cde","type":"HelpTool"}]},"id":"aac094ff-9928-414e-9d19-7e7a8a15151b","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"6ac83aac-b789-4075-a41d-d21e37dbfff4","type":"ColumnDataSource"},{"attributes":{},"id":"cef08d6e-5896-4244-8867-1a0a93f592d6","type":"ToolEvents"},{"attributes":{"plot":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"}},"id":"d8b7752b-2afa-418e-9f0a-ba830aa2150c","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ecfaee12-98b8-4125-9e02-56e597e9f859","type":"Circle"},{"attributes":{"plot":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"6699d450-b479-4ba5-ab5b-94c7a45aa1b3","type":"BasicTicker"}},"id":"aed64ccc-a786-4703-9d9a-cd244186a27a","type":"Grid"},{"attributes":{"plot":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"}},"id":"527fc40b-737f-4478-8ca6-557c29827cde","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"f5796b5f-f647-4347-bd03-6fe1be63eb0a","type":"Title"},{"attributes":{"child":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"},"title":"line"},"id":"bbb87128-9874-4429-9880-4d574bfe9335","type":"Panel"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4e950b21-b964-4d1a-ae08-070f6f39b7b3","type":"PanTool"},{"id":"d4b42c65-cd5c-4fba-8f90-390e99ff8482","type":"WheelZoomTool"},{"id":"421411e4-ee78-41fe-be20-5a36e63098c8","type":"BoxZoomTool"},{"id":"9350ae7a-ca49-4d43-bb22-42d37a1249c6","type":"SaveTool"},{"id":"d8b7752b-2afa-418e-9f0a-ba830aa2150c","type":"ResetTool"},{"id":"0cce2d76-ed68-4f8f-a089-526a49dafc12","type":"HelpTool"}]},"id":"e9f1e232-2260-430e-98c4-e55198788a80","type":"Toolbar"},{"attributes":{"formatter":{"id":"46fd23eb-8edd-462d-a221-5d6e7b9df287","type":"BasicTickFormatter"},"plot":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"6699d450-b479-4ba5-ab5b-94c7a45aa1b3","type":"BasicTicker"}},"id":"825b65e1-dca0-4caa-af6e-3c920f324a5d","type":"LinearAxis"},{"attributes":{"plot":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"}},"id":"4e950b21-b964-4d1a-ae08-070f6f39b7b3","type":"PanTool"},{"attributes":{"plot":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"}},"id":"0cce2d76-ed68-4f8f-a089-526a49dafc12","type":"HelpTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"6fb1160e-74b8-41e5-bd0f-423bfaeac373","type":"Line"},{"attributes":{"callback":null},"id":"3ac93074-9b02-4ab2-a9c1-050f3260de55","type":"DataRange1d"},{"attributes":{},"id":"c241138b-ed8e-478b-bb6f-8aed318bd022","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"40ca22d1-383d-443b-83cf-6f9c551fe925","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"0399c146-6b2a-476c-b823-09f83c299e8b","type":"Panel"},{"id":"bbb87128-9874-4429-9880-4d574bfe9335","type":"Panel"}]},"id":"a22b5358-bab7-4dd2-aeae-752ef97ec935","type":"Tabs"},{"attributes":{"data_source":{"id":"40ca22d1-383d-443b-83cf-6f9c551fe925","type":"ColumnDataSource"},"glyph":{"id":"c2349524-125d-48c7-81cf-f3dc9963c31a","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"6fb1160e-74b8-41e5-bd0f-423bfaeac373","type":"Line"},"selection_glyph":null},"id":"bb7f82b1-5df2-402f-ba33-1ed9ff114e66","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"cb5caa54-402e-428b-bd72-4d3c5842e3de","type":"BasicTickFormatter"},"plot":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1d5f079-c1a1-4f7e-897d-f69d2da4aedd","type":"BasicTicker"}},"id":"7af5d529-3dc8-408c-ac85-09541d868df2","type":"LinearAxis"},{"attributes":{},"id":"3ccc6481-1160-486d-bd9a-87f375c49852","type":"BasicTickFormatter"},{"attributes":{},"id":"cb5caa54-402e-428b-bd72-4d3c5842e3de","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3ccc6481-1160-486d-bd9a-87f375c49852","type":"BasicTickFormatter"},"plot":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ec9eaf9-4d1e-4a5b-95bc-00232394bce5","type":"BasicTicker"}},"id":"25aedc02-f905-4fee-a67b-183afaf9e803","type":"LinearAxis"},{"attributes":{"overlay":{"id":"08b0a6b9-122c-4f48-a844-624b966c5c24","type":"BoxAnnotation"},"plot":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"}},"id":"421411e4-ee78-41fe-be20-5a36e63098c8","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"}},"id":"02e94cd2-0282-4614-84d6-829060663e9c","type":"WheelZoomTool"},{"attributes":{},"id":"46fd23eb-8edd-462d-a221-5d6e7b9df287","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5eab878f-469e-4fbc-ad06-d74127f47ba1","type":"Circle"},{"attributes":{"plot":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ec9eaf9-4d1e-4a5b-95bc-00232394bce5","type":"BasicTicker"}},"id":"494a5753-a710-4e7c-a261-14f12ef5f64e","type":"Grid"},{"attributes":{"callback":null},"id":"99e4c0d6-578f-46d1-8da1-a924cffa1fca","type":"DataRange1d"},{"attributes":{"below":[{"id":"825b65e1-dca0-4caa-af6e-3c920f324a5d","type":"LinearAxis"}],"left":[{"id":"8f40497e-5120-4780-ad20-2cb63cb38a57","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"825b65e1-dca0-4caa-af6e-3c920f324a5d","type":"LinearAxis"},{"id":"aed64ccc-a786-4703-9d9a-cd244186a27a","type":"Grid"},{"id":"8f40497e-5120-4780-ad20-2cb63cb38a57","type":"LinearAxis"},{"id":"cc1e4418-aede-4f37-9834-195ebb5eef64","type":"Grid"},{"id":"08b0a6b9-122c-4f48-a844-624b966c5c24","type":"BoxAnnotation"},{"id":"f0982a9c-92f2-4066-9452-0d31865ca2fd","type":"GlyphRenderer"}],"title":{"id":"f5796b5f-f647-4347-bd03-6fe1be63eb0a","type":"Title"},"tool_events":{"id":"cef08d6e-5896-4244-8867-1a0a93f592d6","type":"ToolEvents"},"toolbar":{"id":"e9f1e232-2260-430e-98c4-e55198788a80","type":"Toolbar"},"x_range":{"id":"99e4c0d6-578f-46d1-8da1-a924cffa1fca","type":"DataRange1d"},"y_range":{"id":"69ff2b02-40a9-4b60-bd18-eac2f55b7253","type":"DataRange1d"}},"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"eb024d9c-7270-4765-94ea-6ee032c0107c","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1d5f079-c1a1-4f7e-897d-f69d2da4aedd","type":"BasicTicker"}},"id":"533ec077-fa0c-4e4f-8b33-a7588efca067","type":"Grid"},{"attributes":{},"id":"2f8d1e70-7440-427c-a9e5-333b76b6c3cb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a5fe8a70-d5d3-4891-a396-bbf97ffa6d12","type":"DataRange1d"},{"attributes":{},"id":"c1d5f079-c1a1-4f7e-897d-f69d2da4aedd","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ad764dfc-7780-4747-96b8-d22b62c4de1a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"}},"id":"d4b42c65-cd5c-4fba-8f90-390e99ff8482","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"ad764dfc-7780-4747-96b8-d22b62c4de1a","type":"BoxAnnotation"},"plot":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"}},"id":"20df3e21-8023-470b-9bed-f8f08e5de2cb","type":"BoxZoomTool"},{"attributes":{},"id":"01ebfed1-292f-43a3-957e-f80e71671507","type":"ToolEvents"},{"attributes":{"formatter":{"id":"c241138b-ed8e-478b-bb6f-8aed318bd022","type":"BasicTickFormatter"},"plot":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f8d1e70-7440-427c-a9e5-333b76b6c3cb","type":"BasicTicker"}},"id":"8f40497e-5120-4780-ad20-2cb63cb38a57","type":"LinearAxis"},{"attributes":{"plot":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"}},"id":"eb70b465-53f9-4157-851b-6bc3a79054c8","type":"PanTool"},{"attributes":{"plot":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"}},"id":"9350ae7a-ca49-4d43-bb22-42d37a1249c6","type":"SaveTool"},{"attributes":{},"id":"2ec9eaf9-4d1e-4a5b-95bc-00232394bce5","type":"BasicTicker"},{"attributes":{},"id":"6699d450-b479-4ba5-ab5b-94c7a45aa1b3","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"c2349524-125d-48c7-81cf-f3dc9963c31a","type":"Line"},{"attributes":{"child":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"0399c146-6b2a-476c-b823-09f83c299e8b","type":"Panel"},{"attributes":{"plot":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"}},"id":"0369ac85-e1b3-4483-8ee8-a51d233bb52a","type":"SaveTool"},{"attributes":{"callback":null},"id":"69ff2b02-40a9-4b60-bd18-eac2f55b7253","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"32728e7c-d1d0-444c-bf58-d22cfd683cf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f8d1e70-7440-427c-a9e5-333b76b6c3cb","type":"BasicTicker"}},"id":"cc1e4418-aede-4f37-9834-195ebb5eef64","type":"Grid"},{"attributes":{"below":[{"id":"25aedc02-f905-4fee-a67b-183afaf9e803","type":"LinearAxis"}],"left":[{"id":"7af5d529-3dc8-408c-ac85-09541d868df2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"25aedc02-f905-4fee-a67b-183afaf9e803","type":"LinearAxis"},{"id":"494a5753-a710-4e7c-a261-14f12ef5f64e","type":"Grid"},{"id":"7af5d529-3dc8-408c-ac85-09541d868df2","type":"LinearAxis"},{"id":"533ec077-fa0c-4e4f-8b33-a7588efca067","type":"Grid"},{"id":"ad764dfc-7780-4747-96b8-d22b62c4de1a","type":"BoxAnnotation"},{"id":"bb7f82b1-5df2-402f-ba33-1ed9ff114e66","type":"GlyphRenderer"}],"title":{"id":"eb024d9c-7270-4765-94ea-6ee032c0107c","type":"Title"},"tool_events":{"id":"01ebfed1-292f-43a3-957e-f80e71671507","type":"ToolEvents"},"toolbar":{"id":"aac094ff-9928-414e-9d19-7e7a8a15151b","type":"Toolbar"},"x_range":{"id":"3ac93074-9b02-4ab2-a9c1-050f3260de55","type":"DataRange1d"},"y_range":{"id":"a5fe8a70-d5d3-4891-a396-bbf97ffa6d12","type":"DataRange1d"}},"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"6ac83aac-b789-4075-a41d-d21e37dbfff4","type":"ColumnDataSource"},"glyph":{"id":"5eab878f-469e-4fbc-ad06-d74127f47ba1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ecfaee12-98b8-4125-9e02-56e597e9f859","type":"Circle"},"selection_glyph":null},"id":"f0982a9c-92f2-4066-9452-0d31865ca2fd","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"08b0a6b9-122c-4f48-a844-624b966c5c24","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7d8e5378-3a67-46c6-8caf-7cf0bdbd0373","subtype":"Figure","type":"Plot"}},"id":"3f838b75-06ae-4f29-bc24-0bc03583ab2f","type":"ResetTool"}],"root_ids":["a22b5358-bab7-4dd2-aeae-752ef97ec935"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"dce5c54d-6d4e-4909-9957-c556f1931a79","elementid":"7807fd0e-8bbf-47aa-9dc1-11c3d91741eb","modelid":"a22b5358-bab7-4dd2-aeae-752ef97ec935"}];
                
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
