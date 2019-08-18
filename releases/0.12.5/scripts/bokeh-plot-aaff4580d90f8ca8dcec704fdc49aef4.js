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
      };var element = document.getElementById("b9930436-7a6f-4951-bcec-531b1080a259");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9930436-7a6f-4951-bcec-531b1080a259' but no matching script tag was found. ")
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
                var docs_json = {"b8a75ad8-bc70-44e1-ba30-e66de34f0a75":{"roots":{"references":[{"attributes":{"callback":null,"end":10},"id":"1487d923-7db2-474b-9f1b-04175b0bccc3","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3041f1d2-a314-4f03-b4b4-0427ce695097","type":"PanTool"},{"id":"595abd91-ab52-49e1-8d19-13868ffb92f2","type":"WheelZoomTool"},{"id":"78c3ad17-800b-4acb-9898-abce3d4ca934","type":"BoxZoomTool"},{"id":"a0252e38-c4ab-4c1f-a066-ce7cd6bf40cb","type":"SaveTool"},{"id":"c6a303c4-57a7-442c-bdd8-e1b2994e838c","type":"ResetTool"},{"id":"47b4d68d-fa8c-40b1-826e-856444f71a5b","type":"HelpTool"}]},"id":"7604d0fc-da52-4b2f-b680-bc1ab04b3709","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"},"ticker":{"id":"43307a01-7f13-45c9-8d36-8ad6e04a3d71","type":"BasicTicker"}},"id":"1cfe4876-908c-4f64-854d-610ee96bff14","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"8027a9b3-9389-4fe5-8bb1-ab8d7e34afa1","type":"Title"},{"attributes":{"overlay":{"id":"d843e03e-462a-4428-bb9f-959c33047353","type":"BoxAnnotation"},"plot":{"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"}},"id":"78c3ad17-800b-4acb-9898-abce3d4ca934","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"}},"id":"c6a303c4-57a7-442c-bdd8-e1b2994e838c","type":"ResetTool"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"914daa4d-de1a-4e8a-8238-4e0ebb0f3fbc","type":"ImageRGBA"},{"attributes":{},"id":"3c082254-4691-47a6-9bc4-46334be52f6b","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"5706a987-2807-4c25-a407-0decd88b2b93","type":"Range1d"},{"attributes":{},"id":"3700723e-369b-417e-ac88-9a38cb184233","type":"BasicTickFormatter"},{"attributes":{},"id":"b571c25b-1c91-4f9b-9cee-1acf898884d4","type":"ToolEvents"},{"attributes":{"plot":{"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"}},"id":"47b4d68d-fa8c-40b1-826e-856444f71a5b","type":"HelpTool"},{"attributes":{"formatter":{"id":"66808f97-17d6-4f60-8280-190c2f07e19c","type":"BasicTickFormatter"},"plot":{"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c082254-4691-47a6-9bc4-46334be52f6b","type":"BasicTicker"}},"id":"ac533ef2-b44d-492e-a3d9-b626d023ebbb","type":"LinearAxis"},{"attributes":{"plot":{"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c082254-4691-47a6-9bc4-46334be52f6b","type":"BasicTicker"}},"id":"36405017-f278-4510-87da-a209a33a26de","type":"Grid"},{"attributes":{"plot":{"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"}},"id":"595abd91-ab52-49e1-8d19-13868ffb92f2","type":"WheelZoomTool"},{"attributes":{},"id":"66808f97-17d6-4f60-8280-190c2f07e19c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"}},"id":"3041f1d2-a314-4f03-b4b4-0427ce695097","type":"PanTool"},{"attributes":{"below":[{"id":"ac533ef2-b44d-492e-a3d9-b626d023ebbb","type":"LinearAxis"}],"left":[{"id":"569c4c2d-0c64-4754-b702-16e3046fd1db","type":"LinearAxis"}],"renderers":[{"id":"ac533ef2-b44d-492e-a3d9-b626d023ebbb","type":"LinearAxis"},{"id":"36405017-f278-4510-87da-a209a33a26de","type":"Grid"},{"id":"569c4c2d-0c64-4754-b702-16e3046fd1db","type":"LinearAxis"},{"id":"1cfe4876-908c-4f64-854d-610ee96bff14","type":"Grid"},{"id":"d843e03e-462a-4428-bb9f-959c33047353","type":"BoxAnnotation"},{"id":"6be38284-1e1c-4c60-a89c-d6ace6094e42","type":"GlyphRenderer"}],"title":{"id":"8027a9b3-9389-4fe5-8bb1-ab8d7e34afa1","type":"Title"},"tool_events":{"id":"b571c25b-1c91-4f9b-9cee-1acf898884d4","type":"ToolEvents"},"toolbar":{"id":"7604d0fc-da52-4b2f-b680-bc1ab04b3709","type":"Toolbar"},"x_range":{"id":"5706a987-2807-4c25-a407-0decd88b2b93","type":"Range1d"},"y_range":{"id":"1487d923-7db2-474b-9f1b-04175b0bccc3","type":"Range1d"}},"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"46f5b352-7e96-4343-b23e-0b96d869a37d","type":"ImageRGBA"},{"attributes":{},"id":"43307a01-7f13-45c9-8d36-8ad6e04a3d71","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b5db1454-32fc-4f9c-bfdc-db2d192abe4c","type":"ColumnDataSource"},"glyph":{"id":"914daa4d-de1a-4e8a-8238-4e0ebb0f3fbc","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"46f5b352-7e96-4343-b23e-0b96d869a37d","type":"ImageRGBA"},"selection_glyph":null},"id":"6be38284-1e1c-4c60-a89c-d6ace6094e42","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["image"],"data":{"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}]}},"id":"b5db1454-32fc-4f9c-bfdc-db2d192abe4c","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d843e03e-462a-4428-bb9f-959c33047353","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"}},"id":"a0252e38-c4ab-4c1f-a066-ce7cd6bf40cb","type":"SaveTool"},{"attributes":{"formatter":{"id":"3700723e-369b-417e-ac88-9a38cb184233","type":"BasicTickFormatter"},"plot":{"id":"2b5052ee-44ba-4263-b785-cec20b0d3d13","subtype":"Figure","type":"Plot"},"ticker":{"id":"43307a01-7f13-45c9-8d36-8ad6e04a3d71","type":"BasicTicker"}},"id":"569c4c2d-0c64-4754-b702-16e3046fd1db","type":"LinearAxis"}],"root_ids":["2b5052ee-44ba-4263-b785-cec20b0d3d13"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"b8a75ad8-bc70-44e1-ba30-e66de34f0a75","elementid":"b9930436-7a6f-4951-bcec-531b1080a259","modelid":"2b5052ee-44ba-4263-b785-cec20b0d3d13"}];
                
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
