document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("844eee46-54aa-41e1-bffe-ffde5a84c6fa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '844eee46-54aa-41e1-bffe-ffde5a84c6fa' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"a6dae5bd-dd17-4725-a604-42cefd90c7fe":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"df926b0a-7745-4f4f-ba97-15881e3d4beb","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":[46.6]}},"id":"9170d1d0-ae93-4431-a6af-0db76284563d","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"d3f9bb1d-b26e-41d7-8b82-122a27eeff10","type":"Segment"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":[26.8,28.8,32.7,38.0,30.7]}},"id":"1b375438-356b-4a51-9c0e-fb69f00effc7","type":"ColumnDataSource"},{"attributes":{},"id":"18c9e73b-b591-4e2f-99a9-b010c2caabd4","type":"ToolEvents"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"345aad50-822b-4b76-9833-bb47a91b8db0","type":"Segment"},{"attributes":{"data_source":{"id":"80d808c0-1ce0-4a74-bbfb-0da450d2ed8a","type":"ColumnDataSource"},"glyph":{"id":"a2b17c52-3811-4016-8a36-50fac62e395a","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aa7b377b-c413-49b5-adbe-20a71a40a961","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"}},"id":"20d758b3-7e9d-4557-9824-2194758ad28b","type":"ResetTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"233daeee-b9c8-4025-b184-0e578b8290a7","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"27223f94-2375-43b7-b067-1f6e2490f2c0","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"fb844fa6-b1ec-400e-86c4-c3ae9dae3543","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"88d15231-e360-4f97-8174-898a915a5d37","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ba1c4a29-61c3-4c8a-96db-6b293f601b3a","type":"ColumnDataSource"},"glyph":{"id":"1ebbb797-dd0f-48f8-b0ac-7359a4a3141a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bedac376-c3bc-4080-ac32-ab5d98b6843a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"88d15231-e360-4f97-8174-898a915a5d37","type":"ColumnDataSource"},"glyph":{"id":"d3f9bb1d-b26e-41d7-8b82-122a27eeff10","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bfb85af6-14ce-4821-97af-772a12624d73","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"80d808c0-1ce0-4a74-bbfb-0da450d2ed8a","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"75ea016a-3386-4d23-ac97-85b24acaf626","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#00cccc"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"7731640b-fe82-4058-9b3f-e3a040b08d03","type":"ColumnDataSource"},{"attributes":{},"id":"38f919ab-857d-4b28-b16b-b54268716c4e","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"8a21b859-ebaf-4f5d-9ea5-a6c99e3d0fe1","type":"BoxAnnotation"},"plot":{"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"}},"id":"2f974165-b8f7-4bb8-912e-c3dea3de9757","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"da837c5f-9fd3-498c-81a0-cf14094c9efe","type":"ColumnDataSource"},"glyph":{"id":"27223f94-2375-43b7-b067-1f6e2490f2c0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8759da0a-5d58-4746-9eb7-871f46340c1b","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"16c9e5a8-dae9-4204-b48e-3151112a4377","type":"CategoricalAxis"}],"height":400,"left":[{"id":"c9a11978-8068-461d-b3b3-2c8cdf8ed9dd","type":"LinearAxis"}],"renderers":[{"id":"8a21b859-ebaf-4f5d-9ea5-a6c99e3d0fe1","type":"BoxAnnotation"},{"id":"29bfee87-65ec-4ff1-a925-65b0bf66ad2a","type":"GlyphRenderer"},{"id":"bedac376-c3bc-4080-ac32-ab5d98b6843a","type":"GlyphRenderer"},{"id":"aa7b377b-c413-49b5-adbe-20a71a40a961","type":"GlyphRenderer"},{"id":"59267574-406f-43cd-976c-2e42f4f07604","type":"GlyphRenderer"},{"id":"c517283c-ab36-420e-b651-8a6742b6fc29","type":"GlyphRenderer"},{"id":"91789fed-d3fc-47a9-abc6-89e480af881a","type":"GlyphRenderer"},{"id":"2b47f3af-0a0e-4966-80d1-b6049c5bf978","type":"GlyphRenderer"},{"id":"bc211291-38cd-4e68-b0b0-7ec4af977aeb","type":"GlyphRenderer"},{"id":"8759da0a-5d58-4746-9eb7-871f46340c1b","type":"GlyphRenderer"},{"id":"bfb85af6-14ce-4821-97af-772a12624d73","type":"GlyphRenderer"},{"id":"0f18d428-9834-4c16-8953-3b1ed62d0d12","type":"GlyphRenderer"},{"id":"1be36b6c-e3a9-437f-ad79-dd0adbf7d072","type":"GlyphRenderer"},{"id":"cde8c08f-6674-4dfb-8406-74aea197f6c1","type":"GlyphRenderer"},{"id":"55915c5b-b54a-483c-8131-e9b641ef1787","type":"GlyphRenderer"},{"id":"93fa6039-882c-46de-88c5-56151c8730c8","type":"GlyphRenderer"},{"id":"dd2f4439-4a01-415c-b192-9152bad973f1","type":"GlyphRenderer"},{"id":"605be752-7d91-4bfd-88af-be03f70b12c0","type":"GlyphRenderer"},{"id":"a6abb5e9-7f6e-4730-ba03-596e8655456a","type":"GlyphRenderer"},{"id":"02fb5b02-a6d3-4af7-bddc-b3f0bd60f3a9","type":"Legend"},{"id":"16c9e5a8-dae9-4204-b48e-3151112a4377","type":"CategoricalAxis"},{"id":"c9a11978-8068-461d-b3b3-2c8cdf8ed9dd","type":"LinearAxis"},{"id":"f90d23dc-c474-483b-8173-243b671f7ac5","type":"Grid"}],"title":{"id":"fa4c0df7-0fec-492f-ad3c-68961bb4ea8f","type":"Title"},"tool_events":{"id":"18c9e73b-b591-4e2f-99a9-b010c2caabd4","type":"ToolEvents"},"toolbar":{"id":"34e63784-fa53-4b0d-8b80-539944749d13","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"32e58ae3-0e27-41c4-8423-0511b8729972","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"86f0e814-07ec-44eb-9f75-499bd7819132","type":"Range1d"}},"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"46083d46-9301-4e61-99a3-e78d8da7a167","type":"ColumnDataSource"},"glyph":{"id":"345aad50-822b-4b76-9833-bb47a91b8db0","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2b47f3af-0a0e-4966-80d1-b6049c5bf978","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"64b81055-f253-4062-8f0d-40ab12d44781","type":"Rect"},{"attributes":{"data_source":{"id":"7731640b-fe82-4058-9b3f-e3a040b08d03","type":"ColumnDataSource"},"glyph":{"id":"44dddf1e-1ec7-4b67-91f0-7ca67da698d2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1be36b6c-e3a9-437f-ad79-dd0adbf7d072","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"45bfa5be-fc51-4dd8-8b54-a3a8e724ec6f","type":"Circle"},{"attributes":{"data_source":{"id":"1b375438-356b-4a51-9c0e-fb69f00effc7","type":"ColumnDataSource"},"glyph":{"id":"b348acba-a772-4543-b20c-b9b8c14dab9d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cde8c08f-6674-4dfb-8406-74aea197f6c1","type":"GlyphRenderer"},{"attributes":{},"id":"74b244fc-c907-4346-b88e-ee5b128b70f5","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"46be457a-6bc0-410f-8a17-d442cad94a1f","type":"ColumnDataSource"},"glyph":{"id":"73290060-89df-4cf1-8670-e5662c641960","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0f18d428-9834-4c16-8953-3b1ed62d0d12","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"MPG Summary (grouped by CYL)"},"id":"fa4c0df7-0fec-492f-ad3c-68961bb4ea8f","type":"Title"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#00cccc"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"2b3b650c-97d4-4ce8-a66a-d27e0e0a66df","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"a2b17c52-3811-4016-8a36-50fac62e395a","type":"Segment"},{"attributes":{"plot":{"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"}},"id":"b408d616-bfd2-48ed-ba74-ee341179e36c","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#00cccc"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"da837c5f-9fd3-498c-81a0-cf14094c9efe","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d19b5ff1-81ac-4967-9beb-219d80a44878","type":"Circle"},{"attributes":{"data_source":{"id":"e951d48a-12e0-4de5-8d92-293be6fce116","type":"ColumnDataSource"},"glyph":{"id":"518353f4-a72d-411f-9d4d-81f097e94841","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"29bfee87-65ec-4ff1-a925-65b0bf66ad2a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1280a41a-0523-4939-b452-f29b184cb023","type":"ColumnDataSource"},"glyph":{"id":"64b81055-f253-4062-8f0d-40ab12d44781","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"93fa6039-882c-46de-88c5-56151c8730c8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"df926b0a-7745-4f4f-ba97-15881e3d4beb","type":"ColumnDataSource"},"glyph":{"id":"92493bfb-0ea0-42d3-b58c-2dce8069983c","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"55915c5b-b54a-483c-8131-e9b641ef1787","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"fb844fa6-b1ec-400e-86c4-c3ae9dae3543","type":"ColumnDataSource"},"glyph":{"id":"75fe59a2-6c84-4e94-9f03-de3e5b56930e","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a6abb5e9-7f6e-4730-ba03-596e8655456a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"}},"id":"748a2dc7-216e-419b-a3de-f7707bb73ee8","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b348acba-a772-4543-b20c-b9b8c14dab9d","type":"Circle"},{"attributes":{"plot":{"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"}},"id":"678a68db-7525-48ac-ade2-64c61eb7e2f2","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"},"ticker":{"id":"b99aef1d-f787-416d-bca8-c3160a1def26","type":"BasicTicker"}},"id":"f90d23dc-c474-483b-8173-243b671f7ac5","type":"Grid"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"518353f4-a72d-411f-9d4d-81f097e94841","type":"Rect"},{"attributes":{"data_source":{"id":"2b3b650c-97d4-4ce8-a66a-d27e0e0a66df","type":"ColumnDataSource"},"glyph":{"id":"8757eb41-ecde-4e85-88b4-91ed587644b6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dd2f4439-4a01-415c-b192-9152bad973f1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":[26.6,23.0,23.9]}},"id":"968d681d-496c-47c5-8b6b-58c52a04f175","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"92493bfb-0ea0-42d3-b58c-2dce8069983c","type":"Segment"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"46083d46-9301-4e61-99a3-e78d8da7a167","type":"ColumnDataSource"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"0beb2993-f2c6-4732-92a4-d5a0280cb2bf","type":"BasicTickFormatter"},"plot":{"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"},"ticker":{"id":"b99aef1d-f787-416d-bca8-c3160a1def26","type":"BasicTicker"}},"id":"c9a11978-8068-461d-b3b3-2c8cdf8ed9dd","type":"LinearAxis"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"74b244fc-c907-4346-b88e-ee5b128b70f5","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"},"ticker":{"id":"38f919ab-857d-4b28-b16b-b54268716c4e","type":"CategoricalTicker"}},"id":"16c9e5a8-dae9-4204-b48e-3151112a4377","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#00cccc"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"ba1c4a29-61c3-4c8a-96db-6b293f601b3a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"}},"id":"48766b45-1886-4b29-beeb-4cae4fc22c0a","type":"PanTool"},{"attributes":{"data_source":{"id":"968d681d-496c-47c5-8b6b-58c52a04f175","type":"ColumnDataSource"},"glyph":{"id":"d19b5ff1-81ac-4967-9beb-219d80a44878","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"605be752-7d91-4bfd-88af-be03f70b12c0","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"32e58ae3-0e27-41c4-8423-0511b8729972","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#00cccc"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"e951d48a-12e0-4de5-8d92-293be6fce116","type":"ColumnDataSource"},{"attributes":{},"id":"b99aef1d-f787-416d-bca8-c3160a1def26","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44dddf1e-1ec7-4b67-91f0-7ca67da698d2","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#00cccc"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"2a38bcc8-8bb2-4ea7-82c5-963c3fc0b2f7","type":"ColumnDataSource"},{"attributes":{},"id":"0beb2993-f2c6-4732-92a4-d5a0280cb2bf","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8a21b859-ebaf-4f5d-9ea5-a6c99e3d0fe1","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#00cccc"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"05e21516-945d-42d1-86ce-2b9dc81f7a25","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8757eb41-ecde-4e85-88b4-91ed587644b6","type":"Rect"},{"attributes":{"data_source":{"id":"05e21516-945d-42d1-86ce-2b9dc81f7a25","type":"ColumnDataSource"},"glyph":{"id":"233daeee-b9c8-4025-b184-0e578b8290a7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"59267574-406f-43cd-976c-2e42f4f07604","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2a38bcc8-8bb2-4ea7-82c5-963c3fc0b2f7","type":"ColumnDataSource"},"glyph":{"id":"75ea016a-3386-4d23-ac97-85b24acaf626","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c517283c-ab36-420e-b651-8a6742b6fc29","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#00cccc"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"46be457a-6bc0-410f-8a17-d442cad94a1f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6e171bfa-47e2-4278-9437-791512a79fc3","type":"ColumnDataSource"},"glyph":{"id":"cae8f942-aa77-4e56-ad27-f21a2547db05","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bc211291-38cd-4e68-b0b0-7ec4af977aeb","type":"GlyphRenderer"},{"attributes":{"legends":[["3",[{"id":"29bfee87-65ec-4ff1-a925-65b0bf66ad2a","type":"GlyphRenderer"},{"id":"bedac376-c3bc-4080-ac32-ab5d98b6843a","type":"GlyphRenderer"},{"id":"aa7b377b-c413-49b5-adbe-20a71a40a961","type":"GlyphRenderer"}]],["4",[{"id":"59267574-406f-43cd-976c-2e42f4f07604","type":"GlyphRenderer"},{"id":"c517283c-ab36-420e-b651-8a6742b6fc29","type":"GlyphRenderer"},{"id":"91789fed-d3fc-47a9-abc6-89e480af881a","type":"GlyphRenderer"},{"id":"2b47f3af-0a0e-4966-80d1-b6049c5bf978","type":"GlyphRenderer"}]],["5",[{"id":"bc211291-38cd-4e68-b0b0-7ec4af977aeb","type":"GlyphRenderer"},{"id":"8759da0a-5d58-4746-9eb7-871f46340c1b","type":"GlyphRenderer"},{"id":"bfb85af6-14ce-4821-97af-772a12624d73","type":"GlyphRenderer"}]],["6",[{"id":"0f18d428-9834-4c16-8953-3b1ed62d0d12","type":"GlyphRenderer"},{"id":"1be36b6c-e3a9-437f-ad79-dd0adbf7d072","type":"GlyphRenderer"},{"id":"cde8c08f-6674-4dfb-8406-74aea197f6c1","type":"GlyphRenderer"},{"id":"55915c5b-b54a-483c-8131-e9b641ef1787","type":"GlyphRenderer"}]],["8",[{"id":"93fa6039-882c-46de-88c5-56151c8730c8","type":"GlyphRenderer"},{"id":"dd2f4439-4a01-415c-b192-9152bad973f1","type":"GlyphRenderer"},{"id":"605be752-7d91-4bfd-88af-be03f70b12c0","type":"GlyphRenderer"},{"id":"a6abb5e9-7f6e-4730-ba03-596e8655456a","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"165d8e51-03f8-4aad-aa4a-97664c260dc2","subtype":"Chart","type":"Plot"}},"id":"02fb5b02-a6d3-4af7-bddc-b3f0bd60f3a9","type":"Legend"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"48766b45-1886-4b29-beeb-4cae4fc22c0a","type":"PanTool"},{"id":"748a2dc7-216e-419b-a3de-f7707bb73ee8","type":"WheelZoomTool"},{"id":"2f974165-b8f7-4bb8-912e-c3dea3de9757","type":"BoxZoomTool"},{"id":"678a68db-7525-48ac-ade2-64c61eb7e2f2","type":"SaveTool"},{"id":"20d758b3-7e9d-4557-9824-2194758ad28b","type":"ResetTool"},{"id":"b408d616-bfd2-48ed-ba74-ee341179e36c","type":"HelpTool"}]},"id":"34e63784-fa53-4b0d-8b80-539944749d13","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#00cccc"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"1280a41a-0523-4939-b452-f29b184cb023","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9170d1d0-ae93-4431-a6af-0db76284563d","type":"ColumnDataSource"},"glyph":{"id":"45bfa5be-fc51-4dd8-8b54-a3a8e724ec6f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"91789fed-d3fc-47a9-abc6-89e480af881a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ebbb797-dd0f-48f8-b0ac-7359a4a3141a","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cae8f942-aa77-4e56-ad27-f21a2547db05","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"73290060-89df-4cf1-8670-e5662c641960","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#00cccc"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"6e171bfa-47e2-4278-9437-791512a79fc3","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":49.38},"id":"86f0e814-07ec-44eb-9f75-499bd7819132","type":"Range1d"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"75fe59a2-6c84-4e94-9f03-de3e5b56930e","type":"Segment"}],"root_ids":["165d8e51-03f8-4aad-aa4a-97664c260dc2"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"a6dae5bd-dd17-4725-a604-42cefd90c7fe","elementid":"844eee46-54aa-41e1-bffe-ffde5a84c6fa","modelid":"165d8e51-03f8-4aad-aa4a-97664c260dc2"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});