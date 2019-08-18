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
      };var element = document.getElementById("e5f54751-9ed1-47a2-9bc8-63c8993ccdf9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e5f54751-9ed1-47a2-9bc8-63c8993ccdf9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"c0833d93-3593-4b74-8480-a10ec92c2aa3":{"roots":{"references":[{"attributes":{},"id":"e98c81e6-bd76-4673-9622-a02804520202","type":"BasicTickFormatter"},{"attributes":{},"id":"7d12a911-3f6a-4244-84a0-aa419546c01f","type":"LinearScale"},{"attributes":{},"id":"4a3e97d5-c80b-4415-825c-dbac2bdaae9c","type":"BasicTicker"},{"attributes":{},"id":"743a050e-f0d8-4e73-846f-f551020d1789","type":"BasicTicker"},{"attributes":{},"id":"55b6412c-727c-4530-ab73-608a9ee4b0d0","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"2c106691-03ca-435a-9c65-f0347b48527c","subtype":"Figure","type":"Plot"},"ticker":{"id":"743a050e-f0d8-4e73-846f-f551020d1789","type":"BasicTicker"}},"id":"98712af1-37fd-44b5-93bb-01721658f6a1","type":"Grid"},{"attributes":{"callback":null,"column_names":["image"],"data":{"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}]}},"id":"459d9e85-bfcd-4ccd-a0cc-94f4410d67bf","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"f9d606d2-a74c-4cf9-a678-d674a7f3f1a6","type":"BasicTickFormatter"},"plot":{"id":"2c106691-03ca-435a-9c65-f0347b48527c","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a3e97d5-c80b-4415-825c-dbac2bdaae9c","type":"BasicTicker"}},"id":"813e5a1a-b21b-413a-a34a-85bf41c3cf2e","type":"LinearAxis"},{"attributes":{},"id":"9f2616c0-4b30-4c5b-8607-00ce859a57e8","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"c83029a2-b3c9-41be-97dc-eb7fbb6d62ca","type":"Title"},{"attributes":{"formatter":{"id":"e98c81e6-bd76-4673-9622-a02804520202","type":"BasicTickFormatter"},"plot":{"id":"2c106691-03ca-435a-9c65-f0347b48527c","subtype":"Figure","type":"Plot"},"ticker":{"id":"743a050e-f0d8-4e73-846f-f551020d1789","type":"BasicTicker"}},"id":"4895f1e8-c0f5-4edd-b89c-c66e993e78cf","type":"LinearAxis"},{"attributes":{"callback":null,"end":10},"id":"e6e4d2d8-4d5e-401d-ba4d-53bd37af679b","type":"Range1d"},{"attributes":{},"id":"35319b95-bcfd-4f6d-85c7-028595ba4d9c","type":"WheelZoomTool"},{"attributes":{},"id":"bd5c5d1e-3e86-4b7e-9733-5dd9f84c030c","type":"ResetTool"},{"attributes":{"overlay":{"id":"847be46f-0c91-4bcd-b670-581084889adc","type":"BoxAnnotation"}},"id":"e237f413-5510-4578-a922-9d0a8d018472","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"847be46f-0c91-4bcd-b670-581084889adc","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9f2616c0-4b30-4c5b-8607-00ce859a57e8","type":"PanTool"},{"id":"35319b95-bcfd-4f6d-85c7-028595ba4d9c","type":"WheelZoomTool"},{"id":"e237f413-5510-4578-a922-9d0a8d018472","type":"BoxZoomTool"},{"id":"9e996485-543c-409d-84cc-6ea619945afc","type":"SaveTool"},{"id":"bd5c5d1e-3e86-4b7e-9733-5dd9f84c030c","type":"ResetTool"},{"id":"daaf2124-c2b1-4c27-89e5-6acff13f872b","type":"HelpTool"}]},"id":"49940231-86b8-47fd-b0a2-aea2dad28fcd","type":"Toolbar"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"d3846120-3520-4d25-b895-484e0e7128a1","type":"ImageRGBA"},{"attributes":{"source":{"id":"459d9e85-bfcd-4ccd-a0cc-94f4410d67bf","type":"ColumnDataSource"}},"id":"c45dd51f-a545-4fed-b3da-f3a0cd7d82c4","type":"CDSView"},{"attributes":{"plot":{"id":"2c106691-03ca-435a-9c65-f0347b48527c","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a3e97d5-c80b-4415-825c-dbac2bdaae9c","type":"BasicTicker"}},"id":"0b22cc68-f91f-4ca8-ab41-2a48b5096e89","type":"Grid"},{"attributes":{"below":[{"id":"813e5a1a-b21b-413a-a34a-85bf41c3cf2e","type":"LinearAxis"}],"left":[{"id":"4895f1e8-c0f5-4edd-b89c-c66e993e78cf","type":"LinearAxis"}],"renderers":[{"id":"813e5a1a-b21b-413a-a34a-85bf41c3cf2e","type":"LinearAxis"},{"id":"0b22cc68-f91f-4ca8-ab41-2a48b5096e89","type":"Grid"},{"id":"4895f1e8-c0f5-4edd-b89c-c66e993e78cf","type":"LinearAxis"},{"id":"98712af1-37fd-44b5-93bb-01721658f6a1","type":"Grid"},{"id":"847be46f-0c91-4bcd-b670-581084889adc","type":"BoxAnnotation"},{"id":"bfd2c399-4b61-4e01-89f2-ecd83fb3daf2","type":"GlyphRenderer"}],"title":{"id":"c83029a2-b3c9-41be-97dc-eb7fbb6d62ca","type":"Title"},"toolbar":{"id":"49940231-86b8-47fd-b0a2-aea2dad28fcd","type":"Toolbar"},"x_range":{"id":"a456071b-ab08-450d-a573-6fde5adfb6fb","type":"Range1d"},"x_scale":{"id":"55b6412c-727c-4530-ab73-608a9ee4b0d0","type":"LinearScale"},"y_range":{"id":"e6e4d2d8-4d5e-401d-ba4d-53bd37af679b","type":"Range1d"},"y_scale":{"id":"7d12a911-3f6a-4244-84a0-aa419546c01f","type":"LinearScale"}},"id":"2c106691-03ca-435a-9c65-f0347b48527c","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"459d9e85-bfcd-4ccd-a0cc-94f4410d67bf","type":"ColumnDataSource"},"glyph":{"id":"d3846120-3520-4d25-b895-484e0e7128a1","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"442bbb90-27bc-457c-be7f-811580f962e2","type":"ImageRGBA"},"selection_glyph":null,"view":{"id":"c45dd51f-a545-4fed-b3da-f3a0cd7d82c4","type":"CDSView"}},"id":"bfd2c399-4b61-4e01-89f2-ecd83fb3daf2","type":"GlyphRenderer"},{"attributes":{},"id":"9e996485-543c-409d-84cc-6ea619945afc","type":"SaveTool"},{"attributes":{},"id":"daaf2124-c2b1-4c27-89e5-6acff13f872b","type":"HelpTool"},{"attributes":{"callback":null,"end":10},"id":"a456071b-ab08-450d-a573-6fde5adfb6fb","type":"Range1d"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"442bbb90-27bc-457c-be7f-811580f962e2","type":"ImageRGBA"},{"attributes":{},"id":"f9d606d2-a74c-4cf9-a678-d674a7f3f1a6","type":"BasicTickFormatter"}],"root_ids":["2c106691-03ca-435a-9c65-f0347b48527c"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c0833d93-3593-4b74-8480-a10ec92c2aa3","elementid":"e5f54751-9ed1-47a2-9bc8-63c8993ccdf9","modelid":"2c106691-03ca-435a-9c65-f0347b48527c"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
