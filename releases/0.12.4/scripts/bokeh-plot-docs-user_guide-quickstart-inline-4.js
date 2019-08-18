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
      };var element = document.getElementById("0d537408-6272-4821-9db9-0b92891124e8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d537408-6272-4821-9db9-0b92891124e8' but no matching script tag was found. ")
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
                var docs_json = {"aead78c8-50cc-4ef5-94fe-df17ba5b8bd5":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"a45024c3-3c78-4bb3-bdd0-abefaacea5d8","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1bfc5ac9-06b3-415a-9ff5-6fd59ce4c026","type":"PanTool"},{"id":"5473edeb-15f9-4277-bde2-35600b46eba0","type":"WheelZoomTool"},{"id":"12a9bcf3-7c25-4bfc-bde5-ccf228a0d120","type":"BoxZoomTool"},{"id":"4e3511c9-f84e-4107-8b64-c0fba414b3c0","type":"ResetTool"},{"id":"22908158-7388-4c3c-af30-7489c1ddba32","type":"SaveTool"},{"id":"9c733538-dd36-4759-882d-ca5fad34147a","type":"BoxSelectTool"},{"id":"837ebb72-d6f9-4677-bf5b-d04f69d4a3bb","type":"LassoSelectTool"}]},"id":"e79b0b27-afb9-4e74-80dd-f40cb6fad0dc","type":"Toolbar"},{"attributes":{"callback":null},"id":"1322a503-35f8-4132-b0a3-0f730bb0c84a","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"80ff8961-4b62-4171-b9b1-d8325e28a1e3","type":"BasicTicker"}},"id":"c91ec90c-be03-4a96-ac83-06c88925a2b2","type":"Grid"},{"attributes":{"overlay":{"id":"3bc4611d-b3e1-4a2f-b670-32edd8ba55cd","type":"BoxAnnotation"},"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"}},"id":"0206f684-6d93-48dd-9de0-7e3367b33b6f","type":"BoxZoomTool"},{"attributes":{},"id":"80c6e1e0-8e20-42da-87d9-845f5cefb9df","type":"BasicTickFormatter"},{"attributes":{},"id":"74d3a42e-1c39-421d-8ae5-4a802ae82e30","type":"BasicTicker"},{"attributes":{"overlay":{"id":"0aa5a53e-4e1d-41eb-971e-44888bb643ff","type":"BoxAnnotation"},"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"}},"id":"12a9bcf3-7c25-4bfc-bde5-ccf228a0d120","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"82c5e369-682a-414b-99d5-2c94d609cf18","type":"DataRange1d"},{"attributes":{"formatter":{"id":"80c6e1e0-8e20-42da-87d9-845f5cefb9df","type":"BasicTickFormatter"},"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6c7f37d-c03f-4818-87ab-2a9a1cc7f30b","type":"BasicTicker"}},"id":"095099e2-0aa3-4dd6-ba2d-03c247ab4119","type":"LinearAxis"},{"attributes":{"below":[{"id":"095099e2-0aa3-4dd6-ba2d-03c247ab4119","type":"LinearAxis"}],"left":[{"id":"55cc553e-5e71-4860-83f8-04a1d3e7c15a","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"095099e2-0aa3-4dd6-ba2d-03c247ab4119","type":"LinearAxis"},{"id":"65cb2eb1-91f2-4098-a789-a9b25cfe234a","type":"Grid"},{"id":"55cc553e-5e71-4860-83f8-04a1d3e7c15a","type":"LinearAxis"},{"id":"417d6475-4c0b-44bd-95ed-96ada0ba8b0d","type":"Grid"},{"id":"3bc4611d-b3e1-4a2f-b670-32edd8ba55cd","type":"BoxAnnotation"},{"id":"5c27a4b4-98b7-4093-908e-d070e7f2c399","type":"BoxAnnotation"},{"id":"24c74da5-f2f0-4917-afd3-6dfdbace2b20","type":"PolyAnnotation"},{"id":"249ca8c6-9d65-4bc9-aee5-85427c23ab46","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"c1b6396e-d2ef-4d06-8a0c-39b32e3fe7cb","type":"ToolEvents"},"toolbar":{"id":"5b103bc7-225c-4455-a928-8f6c91d8751a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7a733475-1027-4cd3-9352-01c8ed5a0d48","type":"DataRange1d"},"y_range":{"id":"82c5e369-682a-414b-99d5-2c94d609cf18","type":"DataRange1d"}},"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5c27a4b4-98b7-4093-908e-d070e7f2c399","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"},"ticker":{"id":"74d3a42e-1c39-421d-8ae5-4a802ae82e30","type":"BasicTicker"}},"id":"417d6475-4c0b-44bd-95ed-96ada0ba8b0d","type":"Grid"},{"attributes":{"children":[{"id":"0eab1c65-c7da-4689-aeaf-617904eb1a6d","type":"Row"}]},"id":"396e52f6-8aa3-4d7f-a0e0-42fdf168f6df","type":"Column"},{"attributes":{"callback":null},"id":"7a733475-1027-4cd3-9352-01c8ed5a0d48","type":"DataRange1d"},{"attributes":{},"id":"603a1b3e-2b14-45c1-8d79-5c395991183d","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"053aeccd-a5ff-42c2-a942-cb33877e3851","type":"PolyAnnotation"},{"attributes":{},"id":"a6c7f37d-c03f-4818-87ab-2a9a1cc7f30b","type":"BasicTicker"},{"attributes":{"children":[{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"},{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"}]},"id":"0eab1c65-c7da-4689-aeaf-617904eb1a6d","type":"Row"},{"attributes":{"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"}},"id":"b830570b-bf43-4b78-8c79-d1ebafc5f55f","type":"SaveTool"},{"attributes":{"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"}},"id":"ac496d57-078d-4912-a542-2c55117d2902","type":"ResetTool"},{"attributes":{"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"}},"id":"4e3511c9-f84e-4107-8b64-c0fba414b3c0","type":"ResetTool"},{"attributes":{"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"}},"id":"22908158-7388-4c3c-af30-7489c1ddba32","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0aa5a53e-4e1d-41eb-971e-44888bb643ff","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"a6d2482b-edd3-44ec-9923-1f80a94646f6","type":"DataRange1d"},{"attributes":{"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"603a1b3e-2b14-45c1-8d79-5c395991183d","type":"BasicTicker"}},"id":"88589bd4-be9c-4573-bb2e-1e58833c7033","type":"Grid"},{"attributes":{"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"}},"id":"1bfc5ac9-06b3-415a-9ff5-6fd59ce4c026","type":"PanTool"},{"attributes":{"formatter":{"id":"f9aefd66-abe9-49d1-baac-11bf4f1a9341","type":"BasicTickFormatter"},"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"80ff8961-4b62-4171-b9b1-d8325e28a1e3","type":"BasicTicker"}},"id":"0ee2b918-7a26-49e1-8595-9269c1abb51b","type":"LinearAxis"},{"attributes":{"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"}},"id":"6aa26d38-cd4f-47e9-959e-f5aff89e998c","type":"PanTool"},{"attributes":{},"id":"80ff8961-4b62-4171-b9b1-d8325e28a1e3","type":"BasicTicker"},{"attributes":{},"id":"f9aefd66-abe9-49d1-baac-11bf4f1a9341","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"}},"id":"bf1fb719-e3ff-467e-b9ff-922647fab185","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6c7f37d-c03f-4818-87ab-2a9a1cc7f30b","type":"BasicTicker"}},"id":"65cb2eb1-91f2-4098-a789-a9b25cfe234a","type":"Grid"},{"attributes":{},"id":"e35a71b0-840e-40ee-9a54-3f8bb7cc0929","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"45b87b95-fe75-4e1c-8a7c-c38b54d55729","type":"LinearAxis"}],"left":[{"id":"0ee2b918-7a26-49e1-8595-9269c1abb51b","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"45b87b95-fe75-4e1c-8a7c-c38b54d55729","type":"LinearAxis"},{"id":"88589bd4-be9c-4573-bb2e-1e58833c7033","type":"Grid"},{"id":"0ee2b918-7a26-49e1-8595-9269c1abb51b","type":"LinearAxis"},{"id":"c91ec90c-be03-4a96-ac83-06c88925a2b2","type":"Grid"},{"id":"0aa5a53e-4e1d-41eb-971e-44888bb643ff","type":"BoxAnnotation"},{"id":"b4b844a2-68d4-4e7e-a670-7f6614740c29","type":"BoxAnnotation"},{"id":"053aeccd-a5ff-42c2-a942-cb33877e3851","type":"PolyAnnotation"},{"id":"b5f50a5a-0450-4e33-bac8-74cecf05950f","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"27c1f28f-d38d-46e9-9c9b-36ea9cd6b385","type":"ToolEvents"},"toolbar":{"id":"e79b0b27-afb9-4e74-80dd-f40cb6fad0dc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a6d2482b-edd3-44ec-9923-1f80a94646f6","type":"DataRange1d"},"y_range":{"id":"1322a503-35f8-4132-b0a3-0f730bb0c84a","type":"DataRange1d"}},"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"b4b844a2-68d4-4e7e-a670-7f6614740c29","type":"BoxAnnotation"},"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"},"renderers":[{"id":"b5f50a5a-0450-4e33-bac8-74cecf05950f","type":"GlyphRenderer"}]},"id":"9c733538-dd36-4759-882d-ca5fad34147a","type":"BoxSelectTool"},{"attributes":{},"id":"c1b6396e-d2ef-4d06-8a0c-39b32e3fe7cb","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"2b8ade4d-a77a-4288-bbac-8c990dde8347","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y1","y0"],"data":{"x":{"__ndarray__":"AAAAAAAAAADvgzmDsYSlP++DOYOxhLU/8yJrIoUjwD/vgzmDsYTFP+vkB+Td5co/8yJrIoUj0D9xU9JSG9TSP++DOYOxhNU/bbSgs0c12D/r5Afk3eXaP2kVbxR0lt0/8yJrIoUj4D8yu5460HvhP3FT0lIb1OI/sOsFa2Ys5D/vgzmDsYTlPy4cbZv83OY/bbSgs0c16D+sTNTLko3pP+vkB+Td5eo/Kn07/Cg+7D9pFW8UdJbtP6itoiy/7u4/8yJrIoUj8D8T74Suqs/wPzK7njrQe/E/Uoe4xvUn8j9xU9JSG9TyP5Ef7N5AgPM/sOsFa2Ys9D/Qtx/3i9j0P++DOYOxhPU/DlBTD9cw9j8uHG2b/Nz2P03ohiciifc/bbSgs0c1+D+MgLo/beH4P6xM1MuSjfk/yxjuV7g5+j/r5Afk3eX6PwqxIXADkvs/Kn07/Cg+/D9JSVWITur8P2kVbxR0lv0/iOGIoJlC/j+oraIsv+7+P8d5vLjkmv8/8yJrIoUjAEADCXjol3kAQBPvhK6qzwBAItWRdL0lAUAyu5460HsBQEKhqwDj0QFAUoe4xvUnAkBhbcWMCH4CQHFT0lIb1AJAgTnfGC4qA0CRH+zeQIADQKAF+aRT1gNAsOsFa2YsBEDA0RIxeYIEQNC3H/eL2ARA350svZ4uBUDvgzmDsYQFQP9pRknE2gVADlBTD9cwBkAeNmDV6YYGQC4cbZv83AZAPgJ6YQ8zB0BN6IYnIokHQF3Ok+003wdAbbSgs0c1CEB9mq15WosIQIyAuj9t4QhAnGbHBYA3CUCsTNTLko0JQLwy4ZGl4wlAyxjuV7g5CkDb/vody48KQOvkB+Td5QpA+soUqvA7C0AKsSFwA5ILQBqXLjYW6AtAKn07/Cg+DEA5Y0jCO5QMQElJVYhO6gxAWS9iTmFADUBpFW8UdJYNQHj7e9qG7A1AiOGIoJlCDkCYx5VmrJgOQKitoiy/7g5At5Ov8tFED0DHeby45JoPQNdfyX738A9A8yJrIoUjEED7lXGFjk4QQAMJeOiXeRBAC3x+S6GkEEAT74Suqs8QQBtiixG0+hBAItWRdL0lEUAqSJjXxlARQDK7njrQexFAOi6lndmmEUBCoasA49ERQEoUsmPs/BFAUoe4xvUnEkBa+r4p/1ISQGFtxYwIfhJAaeDL7xGpEkBxU9JSG9QSQHnG2LUk/xJAgTnfGC4qE0CJrOV7N1UTQJEf7N5AgBNAmJLyQUqrE0CgBfmkU9YTQKh4/wddARRAsOsFa2YsFEC4XgzOb1cUQMDREjF5ghRAyEQZlIKtFEDQtx/3i9gUQNcqJlqVAxVA350svZ4uFUDnEDMgqFkVQO+DOYOxhBVA9/Y/5rqvFUD/aUZJxNoVQAfdTKzNBRZADlBTD9cwFkAWw1ly4FsWQB42YNXphhZAJqlmOPOxFkAuHG2b/NwWQDaPc/4FCBdAPgJ6YQ8zF0BGdYDEGF4XQE3ohiciiRdAVVuNiiu0F0BdzpPtNN8XQGVBmlA+ChhAbbSgs0c1GEB1J6cWUWAYQH2arXlaixhAhA203GO2GECMgLo/beEYQJTzwKJ2DBlAnGbHBYA3GUCk2c1oiWIZQKxM1MuSjRlAtL/aLpy4GUC8MuGRpeMZQMOl5/SuDhpAyxjuV7g5GkDTi/S6wWQaQNv++h3LjxpA43EBgdS6GkDr5Afk3eUaQPNXDkfnEBtA+soUqvA7G0ACPhsN+mYbQAqxIXADkhtAEiQo0wy9G0Aaly42FugbQCIKNZkfExxAKn07/Cg+HEAy8EFfMmkcQDljSMI7lBxAQdZOJUW/HEBJSVWITuocQFG8W+tXFR1AWS9iTmFAHUBhomixamsdQGkVbxR0lh1AcIh1d33BHUB4+3vahuwdQIBugj2QFx5AiOGIoJlCHkCQVI8Do20eQJjHlWasmB5AoDqcybXDHkCoraIsv+4eQK8gqY/IGR9At5Ov8tFEH0C/BrZV228fQMd5vLjkmh9Az+zCG+7FH0DXX8l+9/AfQG/p53AADiBA8yJrIoUjIEB3XO7TCTkgQPuVcYWOTiBAf8/0NhNkIEADCXjol3kgQIdC+5kcjyBAC3x+S6GkIECPtQH9JbogQBPvhK6qzyBAlygIYC/lIEAbYosRtPogQJ+bDsM4ECFAItWRdL0lIUCmDhUmQjshQCpImNfGUCFAroEbiUtmIUAyu5460HshQLb0IexUkSFAOi6lndmmIUC+ZyhPXrwhQEKhqwDj0SFAxtousmfnIUBKFLJj7PwhQM5NNRVxEiJAUoe4xvUnIkDWwDt4ej0iQFr6vin/UiJA3TNC24NoIkBhbcWMCH4iQOWmSD6NkyJAaeDL7xGpIkDtGU+hlr4iQHFT0lIb1CJA9YxVBKDpIkB5xti1JP8iQP3/W2epFCNAgTnfGC4qI0AFc2LKsj8jQIms5Xs3VSNADeZoLbxqI0CRH+zeQIAjQBVZb5DFlSNAmJLyQUqrI0AczHXzzsAjQKAF+aRT1iNAJD98VtjrI0CoeP8HXQEkQCyygrnhFiRAsOsFa2YsJEA0JYkc60EkQLheDM5vVyRAPJiPf/RsJEDA0RIxeYIkQEQLluL9lyRAyEQZlIKtJEBMfpxFB8MkQNC3H/eL2CRAU/GiqBDuJEDXKiZalQMlQFtkqQsaGSVA350svZ4uJUBj169uI0QlQOcQMyCoWSVAa0q20SxvJUDvgzmDsYQlQHO9vDQ2miVA9/Y/5rqvJUB7MMOXP8UlQP9pRknE2iVAg6PJ+kjwJUAH3UyszQUmQIsW0F1SGyZADlBTD9cwJkCSidbAW0YmQBbDWXLgWyZAmvzcI2VxJkAeNmDV6YYmQKJv44ZunCZAJqlmOPOxJkCq4unpd8cmQC4cbZv83CZAslXwTIHyJkA2j3P+BQgnQLrI9q+KHSdAPgJ6YQ8zJ0DCO/0SlEgnQEZ1gMQYXidAya4Ddp1zJ0BN6IYnIoknQNEhCtmmnidAVVuNiiu0J0DZlBA8sMknQF3Ok+003ydA4QcXn7n0J0BlQZpQPgooQOl6HQLDHyhAbbSgs0c1KEDx7SNlzEooQHUnpxZRYChA+WAqyNV1KEB9mq15WosoQAHUMCvfoChAhA203GO2KEAIRzeO6MsoQIyAuj9t4ShAELo98fH2KECU88CidgwpQBgtRFT7ISlA","dtype":"float64","shape":[300]},"y0":{"__ndarray__":"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","dtype":"float64","shape":[300]},"y1":{"__ndarray__":"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","dtype":"float64","shape":[300]}}},"id":"43860ab8-e591-4141-b700-3f9d4fa734e2","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6aa26d38-cd4f-47e9-959e-f5aff89e998c","type":"PanTool"},{"id":"bf1fb719-e3ff-467e-b9ff-922647fab185","type":"WheelZoomTool"},{"id":"0206f684-6d93-48dd-9de0-7e3367b33b6f","type":"BoxZoomTool"},{"id":"ac496d57-078d-4912-a542-2c55117d2902","type":"ResetTool"},{"id":"b830570b-bf43-4b78-8c79-d1ebafc5f55f","type":"SaveTool"},{"id":"a10484ea-b974-467b-9179-fbdfa88669e2","type":"BoxSelectTool"},{"id":"67c14355-96d0-4df4-a2c4-d339c7513d75","type":"LassoSelectTool"}]},"id":"5b103bc7-225c-4455-a928-8f6c91d8751a","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"c3095191-022d-4878-a0b0-7e2c86316bf1","type":"Circle"},{"attributes":{},"id":"debcc62d-d57a-473c-be88-bfce29363282","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"debcc62d-d57a-473c-be88-bfce29363282","type":"BasicTickFormatter"},"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"},"ticker":{"id":"74d3a42e-1c39-421d-8ae5-4a802ae82e30","type":"BasicTicker"}},"id":"55cc553e-5e71-4860-83f8-04a1d3e7c15a","type":"LinearAxis"},{"attributes":{"children":[{"id":"fa482fef-e90e-4ae8-bb63-e9b72340e760","type":"ToolbarBox"},{"id":"396e52f6-8aa3-4d7f-a0e0-42fdf168f6df","type":"Column"}]},"id":"eec8b585-1e5c-4e16-b331-c0aa5b1bcc04","type":"Column"},{"attributes":{"data_source":{"id":"43860ab8-e591-4141-b700-3f9d4fa734e2","type":"ColumnDataSource"},"glyph":{"id":"c3095191-022d-4878-a0b0-7e2c86316bf1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a45024c3-3c78-4bb3-bdd0-abefaacea5d8","type":"Circle"},"selection_glyph":null},"id":"249ca8c6-9d65-4bc9-aee5-85427c23ab46","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"e35a71b0-840e-40ee-9a54-3f8bb7cc0929","type":"BasicTickFormatter"},"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"603a1b3e-2b14-45c1-8d79-5c395991183d","type":"BasicTicker"}},"id":"45b87b95-fe75-4e1c-8a7c-c38b54d55729","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"81ff48af-4f5a-4947-ab6f-634fd9d31711","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"24c74da5-f2f0-4917-afd3-6dfdbace2b20","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"24c74da5-f2f0-4917-afd3-6dfdbace2b20","type":"PolyAnnotation"},"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"}},"id":"67c14355-96d0-4df4-a2c4-d339c7513d75","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"43860ab8-e591-4141-b700-3f9d4fa734e2","type":"ColumnDataSource"},"glyph":{"id":"2b8ade4d-a77a-4288-bbac-8c990dde8347","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"81ff48af-4f5a-4947-ab6f-634fd9d31711","type":"Circle"},"selection_glyph":null},"id":"b5f50a5a-0450-4e33-bac8-74cecf05950f","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"5c27a4b4-98b7-4093-908e-d070e7f2c399","type":"BoxAnnotation"},"plot":{"id":"f4ee7ef4-3e23-4fd8-8c0e-8ae378684040","subtype":"Figure","type":"Plot"},"renderers":[{"id":"249ca8c6-9d65-4bc9-aee5-85427c23ab46","type":"GlyphRenderer"}]},"id":"a10484ea-b974-467b-9179-fbdfa88669e2","type":"BoxSelectTool"},{"attributes":{},"id":"27c1f28f-d38d-46e9-9c9b-36ea9cd6b385","type":"ToolEvents"},{"attributes":{"callback":null,"overlay":{"id":"053aeccd-a5ff-42c2-a942-cb33877e3851","type":"PolyAnnotation"},"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"}},"id":"837ebb72-d6f9-4677-bf5b-d04f69d4a3bb","type":"LassoSelectTool"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"6aa26d38-cd4f-47e9-959e-f5aff89e998c","type":"PanTool"},{"id":"bf1fb719-e3ff-467e-b9ff-922647fab185","type":"WheelZoomTool"},{"id":"0206f684-6d93-48dd-9de0-7e3367b33b6f","type":"BoxZoomTool"},{"id":"ac496d57-078d-4912-a542-2c55117d2902","type":"ResetTool"},{"id":"b830570b-bf43-4b78-8c79-d1ebafc5f55f","type":"SaveTool"},{"id":"a10484ea-b974-467b-9179-fbdfa88669e2","type":"BoxSelectTool"},{"id":"67c14355-96d0-4df4-a2c4-d339c7513d75","type":"LassoSelectTool"},{"id":"1bfc5ac9-06b3-415a-9ff5-6fd59ce4c026","type":"PanTool"},{"id":"5473edeb-15f9-4277-bde2-35600b46eba0","type":"WheelZoomTool"},{"id":"12a9bcf3-7c25-4bfc-bde5-ccf228a0d120","type":"BoxZoomTool"},{"id":"4e3511c9-f84e-4107-8b64-c0fba414b3c0","type":"ResetTool"},{"id":"22908158-7388-4c3c-af30-7489c1ddba32","type":"SaveTool"},{"id":"9c733538-dd36-4759-882d-ca5fad34147a","type":"BoxSelectTool"},{"id":"837ebb72-d6f9-4677-bf5b-d04f69d4a3bb","type":"LassoSelectTool"}]},"id":"fa482fef-e90e-4ae8-bb63-e9b72340e760","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b4b844a2-68d4-4e7e-a670-7f6614740c29","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3bc4611d-b3e1-4a2f-b670-32edd8ba55cd","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e9719afe-87db-411d-bc66-b2b9aef821ab","subtype":"Figure","type":"Plot"}},"id":"5473edeb-15f9-4277-bde2-35600b46eba0","type":"WheelZoomTool"}],"root_ids":["eec8b585-1e5c-4e16-b331-c0aa5b1bcc04"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"aead78c8-50cc-4ef5-94fe-df17ba5b8bd5","elementid":"0d537408-6272-4821-9db9-0b92891124e8","modelid":"eec8b585-1e5c-4e16-b331-c0aa5b1bcc04"}];
                
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